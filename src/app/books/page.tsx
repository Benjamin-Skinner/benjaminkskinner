import BooksClient, { BookItem } from "./BooksClient";
import { promises as fs } from "fs";
import path from "path";

interface BookData {
  olid: string;
  title: string;
  author: string;
  rating?: number;
  yearRead?: string;
  cover?: string;
}

interface BooksJson {
  read: BookData[];
  wantToRead: BookData[];
}

async function getBooks(): Promise<{ read: BookItem[]; wantToRead: BookItem[] }> {
  try {
    const filePath = path.join(process.cwd(), "data", "books.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data: BooksJson = JSON.parse(fileContent);

    const read: BookItem[] = data.read.map((b) => ({
      olid: b.olid,
      title: b.title,
      author: b.author,
      rating: b.rating ?? null,
      yearRead: b.yearRead ?? null,
      cover: b.cover ?? null,
    }));

    const wantToRead: BookItem[] = data.wantToRead.map((b) => ({
      olid: b.olid,
      title: b.title,
      author: b.author,
      rating: null,
      yearRead: null,
      cover: b.cover ?? null,
    }));

    return { read, wantToRead };
  } catch (error) {
    console.error("Error loading books:", error);
    return { read: [], wantToRead: [] };
  }
}

export default async function BooksPage() {
  const { read, wantToRead } = await getBooks();

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl mb-2 dark:text-white">Books</h1>
      <BooksClient readBooks={read} wantToReadBooks={wantToRead} />
    </div>
  );
}
