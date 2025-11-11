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

    // Animate section fade-in + upward motion with scrub
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
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true, // 👈 makes it smooth scrolling-based animation
        },
      }
    )
  }, [])

  const skills = [
    'Full-Stack Web Development',
    'Mobile App Development (Flutter, React Native)',
    'AI Integration & Chatbot Development',
    'Content Creation & YouTube (59k+ Subscribers)',
    'Freelancing & Business Development',
    'Educational Content & Training',
    'React, Next.js & TypeScript',
    'Node.js Development',
    'Database Design (MongoDB, PostgreSQL)',
    'Cloud Services (AWS, GCP)',
    'RevenueCat and Stripe Integration',
    'API Development & Integration',
    'Generative AI & Machine Learning',
    'SaaS Development & Architecture',
    'Community Building & Management',
    'Mentoring & Coaching Developers'
  ]

  return (
    <section ref={aboutRef}className="text-white py-12 sm:py-16 md:py-20 lg:py-24 fade-up">
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
              Hi, I`m <span className="text-white font-bold">.</span> —{' '}
              <span className="text-[#FDC700]">Developer & Content Creator</span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-[14px] mb-5">
              I`m a Full-Stack Developer with 10+ years of experience in freelancing, programming, and AI.
              I create developer content on YouTube with 59k+ subscribers, helping developers level up
              their skills through practical tutorials and insights.
            </p>

            <h4 className="text-base font-semibold mb-3">I specialize in:</h4>

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
              Based in Lahore, Dubai & Remote (Dubai Digital Nomad VISA Holder),
              I`m passionate about solving real-world problems through code and sharing
              knowledge with the developer community. Let`s build something amazing together!
            </p>

            {/* === Buttons Section === */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto fade-up">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FDC700] text-black font-semibold rounded-md hover:bg-yellow-300 transition w-full sm:w-auto"
              >
                <Briefcase size={18} />
                Hire Me
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-[#FDC700] text-[#FDC700] font-semibold rounded-md hover:bg-[#FDC700] hover:text-black transition text-sm w-full sm:w-auto"
              >
                <Settings size={18} />
                View My Services
              </a>

              <a
                href="#channel"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-[#FDC700] text-[#FDC700] font-semibold rounded-md hover:bg-[#FDC700] hover:text-black transition text-sm w-full sm:w-auto"
              >
                <Briefcase size={18} />
                View Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
