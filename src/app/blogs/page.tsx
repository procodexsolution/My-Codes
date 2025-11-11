"use client";

import Image from "next/image";
import Link from "next/link";
import {  urlFor } from "../../sanity/lib/image";
import { client as sanityClient } from "../../sanity/lib/client";
import { useEffect, useState } from "react";

export default function AllBlogs() {
  type Blog = {
    _id: string;
    title: string;
    slug: { current: string };
    shortDescription?: string;
    mainImage?: any;
  };
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blog"] | order(publishedAt desc){
        _id,
        title,
        slug,
        shortDescription,
        mainImage
      }`;
      const data = await sanityClient.fetch(query);
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-[#0b0b0b] text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          All <span className="animated-gradient-text">Blog Posts</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Browse through all articles, tutorials, and insights on modern
          development and design practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blogs/${blog.slug.current}`}
              className="group bg-[#141414] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300"
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

              <div className="p-6 text-left">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                  {blog.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {blog.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
