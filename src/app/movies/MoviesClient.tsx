"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import Image from "next/image";

export interface MovieItem {
  id: number;
  title: string;
  year: string;
  director: string;
  genres: string[];
  poster: string | null;
}

type SortKey = "year" | "title" | "director";

const PAGE_SIZE = 24;

export default function MoviesClient({ movies }: { movies: MovieItem[] }) {
  const [sort, setSort] = useState<SortKey>("year");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const sorted = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sort === "year") return Number(b.year) - Number(a.year);
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "director") return a.director.localeCompare(b.director);
      return 0;
    });
  }, [movies, sort]);

  const visible = sorted.slice(0, visibleCount);

  const observerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, sorted.length));
          }
        },
        { rootMargin: "200px" }
      );
      observer.observe(node);
      loaderRef.current = node;
      return () => observer.disconnect();
    },
    [sorted.length]
  );

  const sortBtn = (key: SortKey, label: string) => (
    <button
      onClick={() => { setSort(key); setVisibleCount(PAGE_SIZE); }}
      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
        sort === key
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      {/* Sort controls */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {sortBtn("year", "By Year")}
        {sortBtn("title", "A–Z")}
        {sortBtn("director", "By Director")}
        <span className="ml-auto text-sm text-gray-400 self-center">
          {movies.length} films
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visible.map((movie) => (
          <div key={movie.id} className="flex flex-col gap-1">
            <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              {movie.poster ? (
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center px-2">
                  {movie.title}
                </div>
              )}
            </div>
            <p className="text-sm font-semibold leading-tight line-clamp-2 dark:text-white">
              {movie.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {movie.director || movie.year}
            </p>
          </div>
        ))}
      </div>

      {/* Lazy load sentinel */}
      {visibleCount < sorted.length && (
        <div ref={observerRef} className="h-16 flex items-center justify-center mt-8">
          <span className="text-sm text-gray-400">Loading more...</span>
        </div>
      )}
    </div>
  );
}
