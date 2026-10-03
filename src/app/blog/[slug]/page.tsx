import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BlogArticle from "./BlogArticle";
import posts, { getPostBySlug, getPostDetail } from "@/app/blog/blogPostsData";

// Pre-build one detail page per blog post.
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog | Avicleaner" };
  return { title: `${post.title} | Avicleaner`, description: post.excerpt };
}

// Navbar and footer come from the root layout; the page banner is shared with the other pages.
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="grow">
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <BlogArticle post={getPostDetail(post)} />
    </main>
  );
}
