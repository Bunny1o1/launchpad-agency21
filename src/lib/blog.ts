import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: string;
  readingTime: string;
  author?: string;
  tags?: string[];
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        category: data.category ?? "General",
        content,
        readingTime: stats.text,
        author: data.author ?? "Vinod Yadav",
        tags: data.tags ?? [],
      } as Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "General",
    content,
    readingTime: stats.text,
    author: data.author ?? "Vinod Yadav",
    tags: data.tags ?? [],
  };
}
