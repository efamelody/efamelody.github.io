import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-950 tracking-tight mb-3">
          Blog
        </h1>
        <p className="text-pink-500/70 text-sm md:text-base mb-14">
          Personal experiences, projects, and reflections.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="bg-white rounded-2xl border border-pink-100/80 p-7 md:p-9 hover:border-pink-200/80 hover:shadow-md hover:shadow-pink-50 transition-all duration-200">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-purple-400 font-mono mb-3">
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

                <h2 className="text-xl md:text-2xl font-bold text-pink-900 group-hover:text-pink-600 transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>

                <p className="text-pink-700/60 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-5 text-sm font-semibold text-pink-500 group-hover:text-purple-500 transition-colors inline-flex items-center gap-1">
                  Read more
                  <span className="group-hover:translate-x-0.5 transition-transform inline-block">
                    &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
