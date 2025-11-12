'use client'
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, ChevronLeft, ChevronRight, Laptop, Pause, Play, Settings } from 'lucide-react'

export default function Hero() {
  const images = [
    '/1.jpg',
    '/1.jpg',
    '/1.jpg',
    '/1.jpg',
    '/1.jpg',
    '/1.jpg',
  ]

  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [showButton, setShowButton] = useState(true)

  // ✅ useCallback ensures this function reference doesn’t change on every render
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // ✅ Now include nextSlide safely
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [playing, nextSlide]);

  useEffect(() => {
    setShowButton(false);
    const t = setTimeout(() => setShowButton(true), 800);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <section className="pt-32 md:pt-40 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* === Available Button on Top === */}
        <div className="mb-6 flex justify-center">
          <a
            href="/contact"
            className="group relative flex items-center gap-2 px-6 py-2 rounded-full border border-white bg-gray-800 text-white font-medium hover:bg-gray-700 transition text-sm sm:text-base overflow-hidden"
          >
            {/* ICON SLIDE EFFECT */}
            <span className="relative w-5 h-5 overflow-hidden">
              {/* First icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute inset-0 w-5 h-5 transition-transform duration-300 group-hover:-translate-y-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-9A2.25 2.25 0 0 0 2.25 5.25v13.5A2.25 2.25 0 0 0 4.5 21h9a2.25 2.25 0 0 0 2.25-2.25V15m6 0-3-3m0 0-3 3m3-3v12"
                />
              </svg>

              {/* Second icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute inset-0 w-5 h-5 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>

            {/* TEXT WITH SHINE EFFECT */}
            <span className="relative font-semibold overflow-hidden">
              <span className="shine-text relative z-10">
                Available for new opportunities
              </span>
            </span>

            {/* Shine overlay */}
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </span>
          </a>
        </div>

        {/* === Heading === */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[38px] sm:text-[58px] md:text-[72px] lg:text-[84px] font-normal leading-tight md:leading-[84px]"
        >
          <span>Wordpress </span>
          <span className="animated-gradient-text">Developer</span>
          <br className="hidden sm:block" />
          <span> &amp; </span>
          <span className="gradient-text">Content Creator</span>
        </motion.h1>

        <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
          I build custom WordPress themes, optimize SEO, and deliver seamless
          digital experiences that convert.
        </p>

        {/* === Buttons Section === */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            <Briefcase size={18} />
            Hire Me
          </a>

          <a
            href="/services"
            className="flex items-center gap-2 px-7 py-3 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-black transition text-sm"
          >
            <Settings size={18} />
            View My Services
          </a>
        </div>

        {/* === Carousel Section === */}
        <div className="relative mt-16 w-full max-w-4xl mx-auto rounded-2xl p-[2px] border border-[#404040] shadow-lg">
          <div className="relative rounded-xl overflow-hidden m-[5px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`Project ${index + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-[320px] sm:h-[420px] object-cover rounded-2xl"
              />
            </AnimatePresence>

            {/* Slide Counter */}
            <div className="absolute top-3 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
              {index + 1}/{images.length}
            </div>

            {/* Play / Pause */}
            <button
              onClick={() => setPlaying(!playing)}
              className="absolute top-3 right-4 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={22} />
            </button>

            {/* See Projects Button */}
            <AnimatePresence>
              {showButton && (
                <motion.div
                  key="see-projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center"
                >
                  <a
                    href="#projects"
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow-lg hover:bg-yellow-300 transition text-sm sm:text-base w-full sm:w-auto text-center"
                  >
                    <Laptop size={18} />
                    <span>See Projects</span>
                  </a>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
