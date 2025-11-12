"use client";

import Link from "next/link";
import { Code2, Database, Bot, Palette, Globe, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WordPressServicesPage() {
  const allServices = [
    { icon: <Code2 className="w-10 h-10 text-yellow-400" />, title: "WordPress Development", description: "Custom WordPress websites built for speed, security, and responsiveness." },
    { icon: <ShoppingCart className="w-10 h-10 text-yellow-400" />, title: "WooCommerce Setup", description: "Launch complete online stores with secure payments, checkout, and product management." },
    { icon: <Database className="w-10 h-10 text-yellow-400" />, title: "Custom WordPress Plugins", description: "Develop plugins to add unique features, automate processes, and enhance site functionality." },
    { icon: <Palette className="w-10 h-10 text-yellow-400" />, title: "Elementor Page Design", description: "Create visually stunning pages with Elementor, fully responsive and SEO-friendly." },
    { icon: <Globe className="w-10 h-10 text-yellow-400" />, title: "WordPress SEO Optimization", description: "Improve speed, search rankings, and performance with advanced SEO strategies." },
    { icon: <Bot className="w-10 h-10 text-yellow-400" />, title: "AI Chatbots for WordPress", description: "Integrate AI chatbots and automation tools to enhance user experience and engagement." },
    { icon: <Code2 className="w-10 h-10 text-yellow-400" />, title: "Custom Themes Development", description: "Fully custom, responsive themes tailored to your brand and business goals." },
    { icon: <ShoppingCart className="w-10 h-10 text-yellow-400" />, title: "WooCommerce Customization", description: "Enhance your online store with advanced product features, shipping, and payment options." },
    { icon: <Database className="w-10 h-10 text-yellow-400" />, title: "WordPress Security", description: "Secure your website from hacks, malware, and vulnerabilities with best practices." },
    { icon: <Palette className="w-10 h-10 text-yellow-400" />, title: "Responsive UI/UX Design", description: "User-friendly interfaces with modern design principles for WordPress websites." },
    { icon: <Globe className="w-10 h-10 text-yellow-400" />, title: "Performance Optimization", description: "Faster loading times and smooth performance for all WordPress websites." },
    { icon: <Bot className="w-10 h-10 text-yellow-400" />, title: "WordPress Automation Tools", description: "Automate tasks like forms, emails, and content workflows with custom solutions." },
  ];

  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const toggleVisible = () => {
    if (visibleCount === allServices.length) {
      setVisibleCount(initialCount); // See Less
    } else {
      setVisibleCount(allServices.length); // Load More
    }
  };

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
            WordPress <span className="animated-gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert WordPress solutions including themes, plugins, WooCommerce, SEO, and AI integrations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.slice(0, visibleCount).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative bg-[#111111]/60 border border-[#222] backdrop-blur-lg rounded-2xl p-8 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(255,204,0,0.2)] transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-400 transition">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/10 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Load More / See Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={toggleVisible}
            className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            {visibleCount === allServices.length ? "See Less" : "Load More"}
          </button>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start your WordPress project?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s build a fast, secure, and stunning WordPress website tailored to your business.
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
