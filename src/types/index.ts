/* Posts */
export type PostData = {
  title: string;
  slug: string;
  date: string;
  status: "public" | "draft";
  redirect?: string;
};

export type Post = {
  data: PostData;
  content: string;
};
