"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace this with real submission logic
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#0b0b0b] text-white min-h-screen py-30 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back to Home */}
        <div className="mb-6 text-left">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="animated-gradient-text">Me</span>
        </h1>
        <p className="text-gray-400 mb-12 text-sm md:text-base">
          Have a question or want to collaborate? Fill out the form below and I’ll get back to you.
        </p>

        {submitted && (
          <div className="bg-green-600 text-white px-4 py-3 mb-6 rounded-md text-center">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-[#141414] border border-[#454545] rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-[#141414] border border-[#454545] rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={6}
            className="bg-[#141414] border border-[#454545] rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-400 resize-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
