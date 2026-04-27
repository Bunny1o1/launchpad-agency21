import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author ?? "Vinod Yadav" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author ?? "Vinod Yadav"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // JSON-LD structured data for AEO/GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Vinod Yadav",
      url: "https://saasible.in/about",
      sameAs: [
        "https://www.linkedin.com/in/yuvinod/",
        "https://vinod820.substack.com/",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Vinod Yadav",
    },
    datePublished: post.date,
    url: `https://saasible.in/blog/${post.slug}`,
    keywords: post.tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://saasible.in/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock size={12} /> {post.readingTime}
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Divider */}
          <div className="h-px bg-border mb-12" />

          {/* MDX Content */}
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-code:text-accent prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-pre:rounded-xl
            prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:marker:text-accent
            prose-table:border-collapse
            prose-th:text-left prose-th:text-xs prose-th:font-bold prose-th:uppercase prose-th:tracking-wider prose-th:text-muted-foreground prose-th:border-b prose-th:border-border prose-th:py-3 prose-th:pr-6
            prose-td:text-sm prose-td:text-muted-foreground prose-td:border-b prose-td:border-border/50 prose-td:py-3 prose-td:pr-6
            prose-hr:border-border">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={14} className="text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author box */}
          <div className="mt-12 p-8 rounded-2xl border border-border bg-card flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-surface to-border border border-border flex items-center justify-center text-lg font-bold text-muted-foreground shrink-0">
              VY
            </div>
            <div>
              <div className="font-bold mb-1">Vinod Yadav</div>
              <div className="text-sm text-accent mb-3">Conversational AI Growth Expert</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                8+ years managing WhatsApp Business and conversational AI for
                Netflix, Google, Bosch, and HSBC at Gupshup. Now consulting
                enterprises on messaging strategy.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/yuvinod/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-accent hover:underline"
                >
                  LinkedIn ↗
                </a>
                <Link
                  href="/book"
                  className="text-xs font-semibold text-accent hover:underline"
                >
                  Book a Call ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
