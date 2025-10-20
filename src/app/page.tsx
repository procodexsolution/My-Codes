import Hero from '../components/Hero'
import Stats from '@/components/Stats'
import About from '../components/About'
import Skills from '../components/Skills'


export default function Home(){
return (
<div>
<Hero />
<section className="py-12 container">
<Stats />
</section>
<section className="py-8 container">
<About />
</section>
<section className="py-8">
<Skills />
</section>
</div>
)
}