import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPostMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal — Vinamra Pandey",
  description: "Notes on building and shipping AI products end to end.",
};

export default function BlogIndex() {
  const posts = getAllPostMeta();

  return (
    <>
      <Nav />
      <main className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto w-full max-w-content">
          <p className="font-accent text-xl italic text-muted">Writing</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Journal
          </h1>
          <p className="mt-4 max-w-md text-muted">
            Notes on building and shipping AI products end to end — brand,
            frontend, backend, and deployment.
          </p>

          <div className="mt-12 border-t border-line">
            {posts.length === 0 && (
              <p className="py-10 text-muted">No posts yet — check back soon.</p>
            )}
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 border-b border-line py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div>
                  <h2 className="font-display text-2xl font-semibold transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-muted">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
