"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Building Modern POS Systems",
      description:
        "Discover how to create scalable and efficient point-of-sale systems using C# and SQL Server.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "UI/UX Principles for Desktop Apps",
      description:
        "Learn the key design principles that make your desktop applications clean, modern, and user-friendly.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Integrating AI into Web Platforms",
      description:
        "Step into the future by embedding AI-driven features into your business apps and websites.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="blog"
      className="bg-[#0b0b0b] text-white py-10 md:py-14 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* === Heading === */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Latest{" "}
          <span className="animated-gradient-text">
            Articles & Insights
          </span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Explore my latest writings on technology, software design, and
          real-world development experiences.
        </p>

        {/* === Blog Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#141414] rounded-2xl overflow-hidden border border-[#454545] transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-yellow-400"
            >
              {/* Blog Image */}
              <div className="relative w-full h-52 md:h-60 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {blog.description}
                </p>

                {/* === Link to Single Blog === */}
                <Link
                  href={`/blogs/${blog.id}`}
                  className="inline-flex items-center gap-2 text-yellow-400 font-medium hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* === View All Posts Button === */}
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
