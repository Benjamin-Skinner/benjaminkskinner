import MoviesClient, { MovieItem } from "./MoviesClient";

async function getMovies(): Promise<MovieItem[]> {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  try {
    const res = await fetch(`${base}/api/movies`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
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
