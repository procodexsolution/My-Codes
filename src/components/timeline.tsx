'use client'
import { useEffect, useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaReact, FaDatabase, FaPython, FaCloud } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = timelineRef.current?.querySelectorAll('.timeline-card')

    elements?.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: true, // ✅ smooth scroll effect
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
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
      icon: <FaDatabase />,
      color: '#00B4D8',
    },
    {
      title: 'E-Commerce Platform',
      subtitle: 'Next.js / Stripe / MongoDB',
      description:
        'A modern e-commerce store with user authentication, product management, and secure payment integration.',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
      icon: <FaReact />,
      color: '#14B8A6',
    },
    {
      title: 'AI Image Analyzer',
      subtitle: 'Python / TensorFlow',
      description:
        'Built an AI-based image classification tool with real-time predictions, accuracy graphs, and reports.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      icon: <FaPython />,
      color: '#FACC15',
    },
    {
      title: 'Cloud Monitoring Dashboard',
      subtitle: 'Node.js / AWS / Grafana',
      description:
        'Developed a real-time server monitoring dashboard with metrics visualization, alerts, and user analytics.',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      icon: <FaCloud />,
      color: '#3B82F6',
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Next.js / Tailwind CSS / Framer Motion',
      description:
        'Designed a personal portfolio with animations, project galleries, and GSAP-powered interactive sections.',
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      icon: <FaReact />,
      color: '#06B6D4',
    },
  ]

  return (
    <section className="bg-[#0b0b0b] text-white py-25 max-w-[800px] mx-auto">
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Project{' '}
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 animated-gradient-text ">
            Timeline
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Explore key projects built with precision, performance, and passion — from POS systems to AI tools.
        </p>
      </div>

      <div ref={timelineRef}>
        <VerticalTimeline lineColor="#1f2937">
          {projects.map((proj, i) => (
            <VerticalTimelineElement
              key={i}
              className="timeline-card"
              contentStyle={{
                background: '#111',
                color: '#fff',
                border: '1px solid #1e1e1e',
                borderRadius: '10px',
                boxShadow: '0 0 8px rgba(0,0,0,0.4)',
                padding: '0.8rem 1rem',
                minHeight: '260px',
                maxWidth: '300px',
              }}
              contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
              date={proj.subtitle}
              iconStyle={{
                background: proj.color,
                color: '#fff',
                boxShadow: `0 0 12px ${proj.color}`,
                padding: '0px 20px',
              }}
              icon={proj.icon}
            >
              <div className="mb-2 group relative overflow-hidden rounded-md">
                <div className="aspect-[16/9] w-full bg-gray-800 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    height={100}
                    width={100}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x450?text=Image+Not+Available'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <h3 className="text-base font-semibold mb-1" style={{ color: '#FDC700' }}>
                {proj.title}
              </h3>

              <p className="text-gray-400 text-xs mb-1">{proj.subtitle}</p>
              <p className="text-gray-300 text-xs leading-relaxed">{proj.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}
