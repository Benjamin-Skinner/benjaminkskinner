import { NextResponse } from "next/server";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_SESSION_ID = process.env.TMDB_SESSION_ID;
const TMDB_ACCOUNT_ID = process.env.TMDB_ACCOUNT_ID;
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

export interface MovieItem {
  id: number;
  title: string;
  year: string;
  director: string;
  genres: string[];
  poster: string | null;
}

async function fetchAllRatedMovies(): Promise<MovieItem[]> {
  const movies: MovieItem[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const res = await fetch(
      `https://api.themoviedb.org/3/account/${TMDB_ACCOUNT_ID}/rated/movies?api_key=${TMDB_API_KEY}&session_id=${TMDB_SESSION_ID}&page=${page}&sort_by=created_at.desc`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) break;
    const data = await res.json();
    totalPages = data.total_pages;

    for (const m of data.results) {
      movies.push({
        id: m.id,
        title: m.title,
        year: m.release_date?.slice(0, 4) ?? "?",
        director: "", // fetched below per movie (credits)
        genres: m.genre_ids ?? [],
        poster: m.poster_path ? `${TMDB_IMAGE_BASE}${m.poster_path}` : null,
      });
    }
    page++;
  }

  return movies;
}

// Genre ID map (TMDB standard)
const GENRE_MAP: Record<number, string> = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western",
};

export async function GET() {
  if (!TMDB_API_KEY || !TMDB_SESSION_ID || !TMDB_ACCOUNT_ID) {
    return NextResponse.json({ error: "Missing TMDB config" }, { status: 500 });
  }

  const movies = await fetchAllRatedMovies();

  // Resolve genre IDs to names
  const resolved = movies.map((m) => ({
    ...m,
    genres: (m.genres as unknown as number[]).map((id) => GENRE_MAP[id] ?? "Other"),
  }));

  return NextResponse.json(resolved);
}
