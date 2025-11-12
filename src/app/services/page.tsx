"use client";

import Link from "next/link";
import {
  Code2,
  Palette,
  Database,
  Bot,
  Globe,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-yellow-400" />,
      title: "Web Development",
      description:
        "Fast, scalable, and SEO-friendly websites built with Next.js, React, and Tailwind CSS — designed for performance and elegance.",
    },
    {
      icon: <Database className="w-10 h-10 text-yellow-400" />,
      title: "POS & Desktop Apps",
      description:
        "Custom POS and business management systems built with C# and SQL Server — intuitive, editable, and data-rich.",
    },
    {
      icon: <Bot className="w-10 h-10 text-yellow-400" />,
      title: "AI Chat Integration",
      description:
        "Bring your business to life with intelligent AI chatbots that automate support and engage customers naturally.",
    },
    {
      icon: <Palette className="w-10 h-10 text-yellow-400" />,
      title: "UI/UX Design",
      description:
        "Visually stunning interfaces with pixel-perfect design and smooth user experiences that leave lasting impressions.",
    },
    {
      icon: <Globe className="w-10 h-10 text-yellow-400" />,
      title: "WordPress Development",
      description:
        "From blogs to business sites — fully customized, fast, and secure WordPress websites that stand out from the crowd.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-yellow-400" />,
      title: "WooCommerce Setup",
      description:
        "Launch your online store with WooCommerce — complete with secure payments, product pages, and custom functionality.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back to Home */}
        <div className="mb-6 text-left">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I craft digital experiences that combine design, technology, and
            strategy to help your brand grow online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[#111111]/60 border border-[#222] backdrop-blur-lg rounded-2xl p-8 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(255,204,0,0.2)] transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/10 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s bring your ideas to life with clean code and creative design.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Let’s Work Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
