import type { Metadata } from "next";

// Hidden, unlisted route. Tell crawlers not to index it.
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
