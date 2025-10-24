'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-20 overflow-x-hidden text-center">
      <div className="container mx-auto px-4">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-[#1a1a1a]/80 text-gray-300 px-5 py-2 rounded-full border border-gray-700/60 text-sm hover:border-yellow-400/80 group transition-all duration-300 backdrop-blur-sm"
        >
          <span className="font-medium">WordPress Developer</span>
          <div className="h-5 w-[1px] bg-gray-700/60" />
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center justify-center h-7 w-7 rounded-full bg-black hover:bg-gray-800 transition"
          >
            <ArrowRight
              size={16}
              className="text-gray-400 group-hover:text-yellow-400 transition-all duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[40px] sm:text-[58px] md:text-[72px] lg:text-[84px] font-normal leading-tight md:leading-[84px] mt-8"
        >
          <span className="animated-gradient-text">Creative Developer</span>
          <br className="hidden sm:block" />
          <span> &amp; </span>
          <span className="animated-gradient-text">Content Creator</span>
        </motion.h1>

        <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
          I build performant web experiences and create technical content —
          TypeScript, React, Next.js and more.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold w-full sm:w-auto hover:opacity-90 transition-transform hover:-translate-y-0.5"
            href="#"
          >
            Hire me
          </a>
          <a
            className="px-6 py-3 rounded-md border border-gray-700 text-gray-300 w-full sm:w-auto hover:bg-gray-800 transition-all"
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
