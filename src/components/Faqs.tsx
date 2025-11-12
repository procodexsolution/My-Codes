'use client'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SiElementor, SiPhp, SiWoo, SiYoast } from 'react-icons/si'
import { FaWordpress } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

// SVG Icons — now rendered in white via className
const PhoneIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8v-2a3 3 0 005.356-2.674M15 21h-6m-6-10a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3h-6a3 3 0 01-3-3V11z" />
  </svg>
)

const RobotIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const GraduationIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
)

const CreditCardIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
)

const CloudIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M3 12h18" />
  </svg>
)

const MentorIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const LightningIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do you develop custom WordPress themes?',
      answer:
        'Yes, I create fully custom WordPress themes with responsive design, dynamic templates, optimized performance, and modern best practices.',
      icon: <FaWordpress />,
    },
    {
      question: 'Can you set up WooCommerce stores?',
      answer:
        'Absolutely! I build complete WooCommerce stores with product management, secure checkout, payment gateways integration, and custom functionalities.',
      icon: <SiWoo />,
    },
    {
      question: 'Do you develop custom WordPress plugins?',
      answer:
        'Yes, I develop custom plugins to extend website functionalities, automate workflows, and tailor WordPress to specific client needs.',
      icon: <SiPhp />,
    },
    {
      question: 'How do you optimize WordPress websites for SEO?',
      answer:
        'I implement both on-page and technical SEO strategies using tools like Yoast SEO, improving rankings, site speed, and performance.',
      icon: <SiYoast />,
    },
    {
      question: 'Can you design WordPress websites with page builders?',
      answer:
        'Yes, I use Elementor and other page builders to design modern, visually appealing, and fully responsive websites with smooth user experience.',
      icon: <SiElementor />,
    },
    {
      question: 'Do you integrate payment gateways for WordPress e-commerce?',
      answer:
        'I integrate Stripe, PayPal, Razorpay, and other custom gateways for WooCommerce or headless WordPress e-commerce platforms.',
      icon: <CreditCardIcon />,
    },
    {
      question: 'Which hosting and cloud platforms do you recommend for WordPress?',
      answer:
        'I work with AWS, Google Cloud, and managed WordPress hosting solutions. I ensure performance, backups, security, and scalability.',
      icon: <CloudIcon />,
    },
    {
      question: 'Do you provide WordPress maintenance and support?',
      answer:
        'Yes, I offer ongoing website maintenance, updates, security checks, and performance optimization for WordPress sites.',
      icon: <StarIcon />,
    },
    {
      question: 'Can you migrate websites to WordPress?',
      answer:
        'I handle seamless migrations from other platforms to WordPress, including content, databases, design, and SEO considerations.',
      icon: <GlobeIcon />,
    },
    {
      question: 'Do you offer training or tutorials for managing WordPress sites?',
      answer:
        'Yes, I provide training sessions, documentation, and tutorials so clients can efficiently manage and update their WordPress websites.',
      icon: <GraduationIcon />,
    },
  ]



  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 80%',
            scrub: 1,
            once: false,
          },
          delay: index * 0.05,
        }
      )
    })

    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return (
    <section id='faqs' className="bg-[#0b0b0b] text-white py-8 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - Centered */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Frequently Asked <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animated-gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
            Can’t find what you’re looking for? Feel free to{' '}
            <a
              href="mailto:muhammadamir27901@gmail.com"
              className="text-yellow-400 hover:underline transition-colors"
            >
              contact me directly
            </a>
          </p>
        </div>

        {/* FAQ Accordion - Centered */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-gray-700 rounded-lg overflow-hidden bg-[#111] transition-all duration-300 hover:border-gray-600"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none group"
              >
                <div className="flex items-center space-x-3">
                  {/* ✅ Icon is now WHITE and does NOT rotate */}
                  <span>{faq.icon}</span>
                  <span className="font-medium group-hover:text-gray-200 transition-colors">
                    {faq.question}
                  </span>
                </div>
                {/* ✅ Only arrow rotates */}
                <svg
                  className={`w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? '1000px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  paddingTop: openIndex === index ? '1rem' : '0',
                  paddingBottom: openIndex === index ? '1rem' : '0', // ✅ Equal top & bottom
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease',
                }}
                className="text-gray-300 text-sm leading-relaxed border-t border-gray-700 px-4"
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}