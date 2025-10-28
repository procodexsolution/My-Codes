import Hero from '../components/Hero'
import Stats from '@/components/Stats'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Hero />
      {/* === Stats Section === */}
      <section className="text-white py-0 max-w-[940px] px-5 mx-auto">
        <div>
          <Stats />
        </div>
      </section>
    </div>
  )
}
