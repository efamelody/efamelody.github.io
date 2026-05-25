import Link from "next/link";
import { blogPosts } from "@/data/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-pink-500 hover:text-purple-500 transition-colors mb-10 font-medium group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform inline-block">
            &larr;
          </span>
          Back to blog
        </Link>

        <div className="bg-white/90 rounded-3xl border border-pink-100/80 p-8 md:p-12 shadow-sm">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-purple-400 font-mono mb-4">
            <span>{post.date}</span>
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="text-pink-200">/</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-500 text-[11px] font-sans font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-950 tracking-tight mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-sm md:prose prose-primary max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-pink-500 hover:text-purple-500 transition-colors font-medium group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">
              &larr;
            </span>
            Back to blog
          </Link>
        </div>
      </article>
    </main>
  );
}
