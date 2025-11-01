import Hero from '../components/Hero'
import Stats from '@/components/Stats'
import About from '../components/About'
import Skills from '../components/Skills'
import TechSlider from '@/components/logo'
import LogoMarquee from '@/components/logo'
import ProjectsTimeline from '@/components/timeline'
import FAQSection from '@/components/Faqs'

export default function Home() {
  return (
    <div>
      {/* === Hero Section === */}
      <Hero />
      {/* === Stats Section === */}
      <section className="text-white py-0 max-w-[940px] px-5 mx-auto">
        <div>
          <Stats />
        </div>
      </section>
      {/* === About Section === */}
      <section>
        <div>
          <About />
        </div>
        </section>
        <section>
          <div>
            <LogoMarquee />
          </div>
        </section>
        <section>
          <div>
            <ProjectsTimeline />
          </div>
        </section>
        <section>
          <div>
            <FAQSection />
          </div>
        </section>
    </div>
  )
}
