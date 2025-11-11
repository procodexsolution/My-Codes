import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Blog {
  title: string;
  shortDescription: string;
  publishedAt: string;
  image?: string;
  body: any[];
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

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <Link href="/blogs" className="text-yellow-400 hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#0b0b0b] text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-yellow-400 mb-8 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Blogs
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-400 mb-8">{blog.shortDescription}</p>

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
