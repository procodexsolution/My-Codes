"use client";
import Link from "next/link";
import Image from "next/image";

const dummyBlogs = [
  {
    id: 1,
    title: "Building Modern POS Systems",
    date: "October 20, 2025",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "UI/UX Principles for Desktop Apps",
    date: "October 21, 2025",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Integrating AI into Web Platforms",
    date: "October 23, 2025",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BlogsPage() {
  return (
    <section className="bg-[#0b0b0b] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">Latest Blogs</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {dummyBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group block bg-[#161616] rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
