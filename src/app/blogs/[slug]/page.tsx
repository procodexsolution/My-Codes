import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import type { PortableTextBlock } from "@portabletext/types";

// Define the blog type
interface Blog {
  title: string;
  shortDescription: string;
  publishedAt: string;
  image?: string;
  body: PortableTextBlock[];
}

// Define the expected params type
interface BlogPageProps {
  params: Promise<{ slug: string }>; // ✅ Fix for Next.js App Router typing
}

async function getBlog(slug?: string | string[]): Promise<Blog | null> {
  if (!slug || Array.isArray(slug)) return null;

  const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    shortDescription,
    publishedAt,
    "image": mainImage.asset->url,
    body
  }`;

  const blog = await client.fetch<Blog>(query, { slug });
  return blog || null;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params; // ✅ must await because it's a Promise
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <Link href="/blogs" className="text-yellow-400">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#0b0b0b] text-white min-h-screen py-30 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home */}
<div className="mb-6 text-left">
  <Link
    href="/"
    className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition"
  >
    ← Back to Home
  </Link>
</div>


        <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-400 mb-4">{blog.shortDescription}</p>
        <h2 className="text-gray-400 text-sm mb-8">
          {new Date(blog.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>


        {blog.image && (
          <div className="relative w-full h-72 md:h-[450px] rounded-xl overflow-hidden mb-10">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <article className="prose prose-invert max-w-none">
          <PortableText value={blog.body} />
        </article>
      </div>
    </section>
  );
}
