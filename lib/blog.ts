import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function listFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

function readMeta(file: string): PostMeta {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: (data.excerpt as string) ?? "",
    tags: (data.tags as string[]) ?? [],
  };
}

export function getAllPostMeta(): PostMeta[] {
  return listFiles()
    .map(readMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return listFiles().map((f) => f.replace(/\.md$/, ""));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: (data.excerpt as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    contentHtml: processed.toString(),
  };
}
