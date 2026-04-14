"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";

export interface BookItem {
  olid: string;
  title: string;
  author: string;
  rating: number | null;
  dateRead: string | null;
  cover: string | null;
}

type ViewMode = "read" | "wantToRead";
type SortKey = "title" | "author" | "rating" | "dateRead";
type SortOrder = "asc" | "desc";

const DEFAULT_ORDER: Record<SortKey, SortOrder> = {
  title: "asc",
  author: "asc",
  rating: "desc",
  dateRead: "desc",
};

const PAGE_SIZE = 24;

export default function BooksClient({
  readBooks,
  wantToReadBooks,
}: {
  readBooks: BookItem[];
  wantToReadBooks: BookItem[];
}) {
  const [view, setView] = useState<ViewMode>("read");
  const [sort, setSort] = useState<SortKey>("dateRead");
  const [order, setOrder] = useState<SortOrder>("desc");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const books = view === "read" ? readBooks : wantToReadBooks;

  const sorted = useMemo(() => {
    return [...books].sort((a, b) => {
      let cmp = 0;
      if (sort === "title") cmp = a.title.localeCompare(b.title);
      else if (sort === "author") cmp = a.author.localeCompare(b.author);
      else if (sort === "rating") cmp = (a.rating ?? 0) - (b.rating ?? 0);
      else if (sort === "dateRead") {
        const dateA = a.dateRead ? new Date(a.dateRead).getTime() : 0;
        const dateB = b.dateRead ? new Date(b.dateRead).getTime() : 0;
        cmp = dateA - dateB;
      }
      return order === "asc" ? cmp : -cmp;
    });
  }, [books, sort, order]);

  const visible = sorted.slice(0, visibleCount);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, sorted.length));
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sorted.length, visibleCount]);

  const handleSortClick = (key: SortKey) => {
    if (sort === key) {
      setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSort(key);
      setOrder(DEFAULT_ORDER[key]);
    }
    setVisibleCount(PAGE_SIZE);
  };

  const handleViewChange = (newView: ViewMode) => {
    setView(newView);
    setVisibleCount(PAGE_SIZE);
    // Reset sort for want-to-read since it doesn't have ratings/dates
    if (newView === "wantToRead") {
      setSort("title");
      setOrder("asc");
    } else {
      setSort("dateRead");
      setOrder("desc");
    }
  };

  const viewBtn = (mode: ViewMode, label: string, count: number) => {
    const active = view === mode;
    return (
      <button
        key={mode}
        onClick={() => handleViewChange(mode)}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
          active
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
      >
        {label} ({count})
      </button>
    );
  };

  const sortBtn = (key: SortKey, label: string, disabled: boolean = false) => {
    const active = sort === key;
    return (
      <button
        key={key}
        onClick={() => handleSortClick(key)}
        disabled={disabled}
        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-1 ${
          disabled
            ? "bg-gray-50 text-gray-300 cursor-not-allowed dark:bg-gray-900 dark:text-gray-600"
            : active
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
      >
        {label}
        {active && !disabled && (
          <span className="text-xs leading-none">{order === "asc" ? "↑" : "↓"}</span>
        )}
      </button>
    );
  };

  return (
    <div>


      {/* Sort controls */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {sortBtn("title", "A–Z")}
        {sortBtn("author", "By Author")}
        {view === "read" && sortBtn("rating", "By Rating")}
        {view === "read" && sortBtn("dateRead", "By Date")}
        <span className="ml-auto text-sm text-gray-400 self-center">
          {books.length} books
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visible.map((book) => (
          <div key={book.olid} className="flex flex-col gap-1">
            <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              {book.cover ? (
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center px-2">
                  {book.title}
                </div>
              )}
            </div>
            <p className="text-sm font-semibold leading-tight line-clamp-2 dark:text-white">
              {book.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{book.author}</p>
            {book.rating !== null && book.rating !== undefined && (
              <p className="text-xs text-yellow-500">
                {"★".repeat(book.rating)}
                {"☆".repeat(5 - book.rating)}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Empty state */}
      {books.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p>{view === "read" ? "No books read yet." : "No books in your reading list."}</p>
        </div>
      )}

      {/* Lazy load sentinel */}
      {visibleCount < sorted.length && (
        <div ref={sentinelRef} className="h-16 flex items-center justify-center mt-8">
          <span className="text-sm text-gray-400">Loading more...</span>
        </div>
      )}
    </div>
  );
}
