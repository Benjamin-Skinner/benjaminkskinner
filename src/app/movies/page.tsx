import MoviesClient, { MovieItem } from "./MoviesClient";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_SESSION_ID = process.env.TMDB_SESSION_ID;
const TMDB_ACCOUNT_ID = process.env.TMDB_ACCOUNT_ID;
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

const GENRE_MAP: Record<number, string> = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 53: "Thriller",
  10752: "War", 37: "Western",
};

async function getMovies(): Promise<MovieItem[]> {
  if (!TMDB_API_KEY || !TMDB_SESSION_ID || !TMDB_ACCOUNT_ID) return [];

  const movies: MovieItem[] = [];
  let page = 1;
  let totalPages = 1;

  try {
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
          director: "",
          genres: (m.genre_ids ?? []).map((id: number) => GENRE_MAP[id] ?? "Other"),
          poster: m.poster_path ? `${TMDB_IMAGE_BASE}${m.poster_path}` : null,
        });
      }
      page++;
    }
  } catch {
    return [];
  }

  return movies;
}

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">Movies</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Films I&apos;ve seen, in no particular order of importance.
      </p>
      <MoviesClient movies={movies} />
    </div>
  );
}
