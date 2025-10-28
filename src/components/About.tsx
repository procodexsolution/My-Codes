import { Channel } from 'diagnostics_channel'
import { Briefcase, CheckCircle, Laptop, Settings } from 'lucide-react'

export default function About() {
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
    <section className=" text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-5xl font-bold text-center mb-12 tracking-tight">About Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/3.png"
              alt="About"
              className="rounded-2xl shadow-lg w-full max-w-[420px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-3 leading-snug">
              Hi, I'm <span className="text-white font-bold">Muhammad Amir</span> —{' '}
              <span className="text-yellow-500">Developer & Content Creator</span>
            </h3>

            <p className="text-gray-300 leading-relaxed text-[14px] mb-5">
              I'm a Full-Stack Developer with 10+ years of experience in freelancing, programming, and AI.
              I create developer content on YouTube with 59k+ subscribers, helping developers level up
              their skills through practical tutorials and insights.
            </p>

            <h4 className="text-base font-semibold mb-3">I specialize in:</h4>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300 text-[14px]">
                  <CheckCircle className="text-green-400 w-3.5 h-3.5 flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="text-gray-400 mt-6 text-[14px] leading-relaxed">
              Based in Lahore, Dubai & Remote (Dubai Digital Nomad VISA Holder),
              I'm passionate about solving real-world problems through code and sharing
              knowledge with the developer community. Let's build something amazing together!
            </p>


            {/* === Buttons Section === */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition w-full sm:w-auto"
              >
                <Briefcase size={18} />
                Hire Me
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-black transition text-sm w-full sm:w-auto"
              >
                <Settings size={18} />
                View My Services
              </a>

              <a
                href="#channel"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-black transition text-sm w-full sm:w-auto"
              >
                <Briefcase size={18} />
                View Channel
              </a>
            </div>

          </div>
        </div>
      </div>
    </section >
  )
}
