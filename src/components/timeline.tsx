'use client'
import { useEffect, useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaCloud } from 'react-icons/fa'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsTimeline() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const elements = timelineRef.current?.querySelectorAll('.timeline-card')

    elements?.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            scrub: true,
          },
        }
      )
    })
  }, [])

  const projects = [
    {
      title: 'POS Desktop Application',
      subtitle: 'C# / SQL Server',
      description:
        'A complete point-of-sale system with invoicing, ledgers, vouchers, and detailed reports for retail management.',
      image: 'https://cdn.dribbble.com/userupload/15658869/file/original-50b8c24b14d73a2.png?compress=1&resize=800x600',
      icon: <FaDatabase />,
      color: '#007acc',
    },
    {
      title: 'E-Commerce Platform',
      subtitle: 'Next.js / Stripe / MongoDB',
      description:
        'A modern e-commerce store with user authentication, product management, and secure payment integration.',
      image: 'https://cdn.dribbble.com/userupload/15222246/file/original-df1c12b14b8d6c0.png?compress=1&resize=800x600',
      icon: <FaReact />,
      color: '#61dafb',
    },
    {
      title: 'AI Image Analyzer',
      subtitle: 'Python / TensorFlow',
      description:
        'Built an AI-based image classification tool with real-time predictions, accuracy graphs, and reports.',
      image: 'https://cdn.dribbble.com/userupload/15889762/file/original-9ccf6b9a52e7b1e.png?compress=1&resize=800x600',
      icon: <FaPython />,
      color: '#ffd43b',
    },
    {
      title: 'Cloud Monitoring Dashboard',
      subtitle: 'Node.js / AWS / Grafana',
      description:
        'Developed a real-time server monitoring dashboard with metrics visualization, alerts, and user analytics.',
      image: 'https://cdn.dribbble.com/userupload/15922600/file/original-33c27fbd5c52ee4.png?compress=1&resize=800x600',
      icon: <FaCloud />,
      color: '#38bdf8',
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Next.js / Tailwind CSS / Framer Motion',
      description:
        'Designed a personal portfolio with animations, project galleries, and GSAP-powered interactive sections.',
      image: 'https://cdn.dribbble.com/userupload/15323212/file/original-5f12805ff9e4a9b.png?compress=1&resize=800x600',
      icon: <FaReact />,
      color: '#0ea5e9',
    },
  ]

  return (
    <section className="bg-[#0d0d0d] text-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Project <span className="text-blue-500">Timeline</span>
        </h2>
        <p className="text-gray-400 mt-3">
          A visual showcase of major projects — built with modern technologies and creative engineering.
        </p>
      </div>

      <div ref={timelineRef}>
        <VerticalTimeline>
          {projects.map((proj, i) => (
            <VerticalTimelineElement
              key={i}
              className="timeline-card"
              contentStyle={{
                background: '#111',
                color: '#fff',
                border: '1px solid #222',
                borderRadius: '14px',
                boxShadow: '0 0 15px rgba(0,0,0,0.4)',
              }}
              contentArrowStyle={{ borderRight: '7px solid #222' }}
              date={proj.subtitle}
              iconStyle={{
                background: proj.color,
                color: '#fff',
                boxShadow: `0 0 15px ${proj.color}`,
                transition: 'all 0.3s ease',
              }}
              icon={proj.icon}
            >
              <div className="overflow-hidden rounded-lg mb-3 group relative">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={800}
                  height={500}
                  className="rounded-lg transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{proj.subtitle}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{proj.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}
