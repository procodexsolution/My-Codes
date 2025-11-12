"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// ✅ Define the Blog type
interface Blog {
  _id: string;
  title: string;
  shortDescription: string;
  slug: string;
  image?: string;
  publishedAt: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        shortDescription,
        "slug": slug.current,
        "image": mainImage.asset->url,
        publishedAt
      }`;
      const data = await client.fetch(query);
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  // Only show latest 3 blogs
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-[#0b0b0b] text-white py-10 md:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Latest <span className="animated-gradient-text">Articles & Insights</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Explore my latest writings on technology, software design, WordPress, and real-world development experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {latestBlogs.map((blog) => {
            // Format the published date
            const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <div
                key={blog._id}
                className="bg-[#141414] rounded-2xl overflow-hidden border border-[#454545] transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-yellow-400"
              >
                {blog.image && (
                  <div className="relative w-full h-52 md:h-60 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 text-left">
                  {/* Date with Calendar Icon */}
                  <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {formattedDate}
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">{blog.shortDescription}</p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-yellow-400 font-medium hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            View All Posts <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
