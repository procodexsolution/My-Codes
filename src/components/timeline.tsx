'use client'
import { useEffect, useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaReact, FaDatabase, FaPython, FaCloud, FaWordpress } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { SiElementor, SiPhp, SiWoo } from 'react-icons/si'
import { MdWeb } from 'react-icons/md'

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
    title: 'Custom WordPress Theme',
    subtitle: 'WordPress / PHP / HTML5 / CSS3',
    description:
      'Built a fully custom WordPress theme from scratch with responsive design, dynamic templates, and optimized performance.',
    image: '/wordpress.avif',
    icon: <FaWordpress />,
    color: '#21759B',
  },
  {
    title: 'WooCommerce Store Setup',
    subtitle: 'WooCommerce / WordPress / Stripe',
    description:
      'Developed a complete WooCommerce store with product management, secure checkout, and integrated payment gateways.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
    icon: <SiWoo />,
    color: '#8A2BE2',
  },
  {
    title: 'WordPress SEO Optimization',
    subtitle: 'WordPress / Yoast SEO / Analytics',
    description:
      'Enhanced website SEO using on-page and technical strategies, improving search engine rankings and site performance.',
    image: '/seo.jpg',
    icon: <MdWeb />,
    color: '#F4B400',
  },
  {
    title: 'WordPress Plugin Development',
    subtitle: 'PHP / WordPress / Custom Plugins',
    description:
      'Created custom plugins to add new functionalities and automate processes tailored to client requirements.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    icon: <SiPhp />,
    color: '#264DE4',
  },
  {
    title: 'Portfolio & Blog Websites',
    subtitle: 'WordPress / Elementor / Tailwind CSS',
    description:
      'Designed personal and business websites with modern layouts, animations, and user-friendly navigation using WordPress.',
    image: '/portfolio.png',
    icon: <SiElementor />,
    color: '#FF0000',
  },
];



  return (
    <section id='projects' className="bg-[#0b0b0b] text-white py-25 max-w-[800px] mx-auto">
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
