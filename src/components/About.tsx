'use client'
import { useEffect, useRef } from 'react'
import { Briefcase, CheckCircle, Settings } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const el = aboutRef.current
    if (!el) return

    gsap.fromTo(
      (el as HTMLElement).querySelectorAll('.fade-up'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    )
  }, [])

  const skills = [
    'WordPress Website Development',
    'Custom WordPress Themes',
    'WooCommerce Store Setup & Management',
    'Plugin Customization & Development',
    'WordPress Performance Optimization',
    'Website Migration & Maintenance',
    'Security Hardening & Backups',
    'SEO Setup & Optimization in WordPress',
    'Page Builders (Elementor, WPBakery, Gutenberg)',
    'Speed Optimization (Caching, Image Optimization)',
  ]

  return (
    <section id='about' ref={aboutRef} className="text-white py-12 sm:py-16 md:py-20 lg:py-24 fade-up">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-5xl font-bold text-center mb-12 tracking-tight fade-up">About Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 fade-up">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center fade-up">
            <Image
              src="/3.png"
              alt="About"
              height={100}
              width={100}
              className="rounded-2xl shadow-lg w-full max-w-[420px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 fade-up">
            <h3 className="text-2xl font-semibold mb-3 leading-snug">
              Hi, I`m Muhammad Amir<span className="text-white font-bold">.</span> —{' '}
              <span className="text-[#FDC700]">WordPress Developer</span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-[14px] mb-5">
              I`m a professional WordPress Developer with over 5 years of experience in building
              fast, secure, and user-friendly websites. I specialize in creating custom WordPress
              themes, WooCommerce stores, and optimized websites that perform exceptionally well
              on both desktop and mobile.
            </p>

            <h4 className="text-base font-semibold mb-3">My WordPress Expertise:</h4>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 fade-up">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300 text-[14px]">
                  <CheckCircle className="text-green-400 w-3.5 h-3.5 flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="text-gray-400 mt-6 text-[14px] leading-relaxed fade-up">
              Based in Multan & available for remote work, I`m passionate about delivering
              high-quality WordPress solutions — from small business websites to advanced
              eCommerce stores. Let`s bring your website idea to life!
            </p>

            {/* === Buttons Section === */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto fade-up">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FDC700] text-black font-semibold rounded-md hover:bg-yellow-300 transition w-full sm:w-auto"
              >
                <Briefcase size={18} />
                Hire Me
              </a>

              <a
                href="/services"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-[#FDC700] text-[#FDC700] font-semibold rounded-md hover:bg-[#FDC700] hover:text-black transition text-sm w-full sm:w-auto"
              >
                <Settings size={18} />
                View My Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
