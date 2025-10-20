'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base text-gray-400 mb-4">
          Wordpress Developer
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[38px] sm:text-[58px] md:text-[72px] lg:text-[84px] font-normal leading-tight md:leading-[84px]"
        >
          <span>Wordpress </span>
          <span className="gradient-text">Developer</span>
          {/* Hide line break on mobile */}
          <br className="hidden sm:block" />
          <span> &amp; </span>
          <span className="gradient-text">Content Creator</span>
        </motion.h1>

        <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
          I build performant web experiences and create technical content — TypeScript, React, Next.js and more.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold w-full sm:w-auto"
            href="#"
          >
            Hire me
          </a>
          <a
            className="px-6 py-3 rounded-md border border-gray-700 text-gray-300 w-full sm:w-auto hover:bg-gray-800 transition"
            href="#"
          >
            See Projects
          </a>
        </div>

        <div className="mt-12">
          <div className="mx-auto w-full sm:w-3/4 h-40 sm:h-52 md:h-64 bg-gradient-to-r from-purple-700 to-sky-500 rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  )
}
