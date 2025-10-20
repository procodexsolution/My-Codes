'use client'
import React from 'react'
import { motion } from 'framer-motion'


export default function Hero(){
return (
<section className="py-20 overflow-x-hidden">
<div className="container text-center">
<p className="text-sm text-gray-400 mb-4">Wordpress Developer</p>
<motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="text-[84px] font-normal leading-[84px]">
<span>Wordpress </span>
<span className="gradient-text">Developer</span>
<br />
<span> &amp; </span>
<span className="gradient-text">Content Creator</span>
</motion.h1>
<p className="mt-6 text-gray-400 max-w-2xl mx-auto">I build performant web experiences and create technical content — TypeScript, React, Next.js and more.</p>
<div className="mt-8 flex items-center justify-center gap-4">
<a className="px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold" href="#">Hire me</a>
<a className="px-6 py-3 rounded-md border border-gray-700" href="#">See Projects</a>
</div>
<div className="mt-12">
<div className="mx-auto w-3/4 h-40 bg-gradient-to-r from-purple-700 to-sky-500 rounded"> {/* screenshot mock */}
</div>
</div>
</div>
</section>
)
}