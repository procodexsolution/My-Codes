"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/image";
import { client as sanityClient } from "../../sanity/lib/client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AllBlogs() {
  type Blog = {
    _id: string;
    title: string;
    slug: { current: string };
    shortDescription?: string;
    mainImage?: string;
    publishedAt?: string;
  };

  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blog"] | order(publishedAt desc){
        _id,
        title,
        slug,
        shortDescription,
        mainImage,
        publishedAt
      }`;
      const data = await sanityClient.fetch(query);
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-[#0b0b0b] text-white md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          All <span className="animated-gradient-text">Blog Posts</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Browse through all articles, tutorials, and insights on modern
          development and design practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const formattedDate = blog.publishedAt
              ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No date available";

            return (
              <div
                key={blog._id}
                className="group bg-[#141414] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-52 md:h-60">
                  {blog.mainImage && (
                    <Image
                      src={urlFor(blog.mainImage).url()}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="p-6 text-left flex flex-col flex-grow">
                  <p className="text-gray-500 text-xs mb-2">{formattedDate}</p>

                  <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                    {blog.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {blog.shortDescription}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug.current}`}
                    className="inline-flex items-center text-yellow-400 text-sm font-medium hover:text-yellow-300 transition"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
