"use client";
import Image from "next/image";
import Link from "next/link";

export default function AllBlogs() {
  const allBlogs = [
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
    {
      id: 4,
      title: "Mastering C# for Scalable Applications",
      description:
        "Learn advanced C# design patterns and enterprise-level techniques for large systems.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "The Future of AI Tools in Business",
      description:
        "Explore how artificial intelligence is transforming operations, marketing, and decision-making.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Design Systems for Teams",
      description:
        "Create a consistent and scalable UI design system that boosts collaboration and speeds up delivery.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* === Heading === */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          All <span className="animated-gradient-text">Blog Posts</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Browse through all articles, tutorials, and insights on modern
          development and design practices.
        </p>

        {/* === Blog Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group bg-[#141414] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300"
            >
              <div className="relative w-full h-52 md:h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                  {blog.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
