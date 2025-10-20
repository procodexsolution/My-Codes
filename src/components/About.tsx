import Image from 'next/image'


export default function About(){
return (
<div className="grid md:grid-cols-3 gap-8 items-center overflow-x-hidden">
<div className="md:col-span-1">
<div className="rounded-lg overflow-hidden">
<Image src="/avatar.jpg" alt="Shajeel" width={420} height={420} className="object-cover w-full h-full" />
</div>
</div>
<div className="md:col-span-2">
<h2 className="text-3xl font-semibold gradient-text">About Me</h2>
<p className="text-gray-400 mt-4">Hi, I'm Muhammad Amir — Developer & Content Creator. I build web apps and create content for devs. Experienced with building production apps in TypeScript, React and Next.js.</p>
<ul className="mt-4 text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-2">
<li>• Frontend: React / Next.js</li>
<li>• Backend: Node / Express / Prisma</li>
<li>• Mobile: React Native</li>
<li>• Dev tooling: Vercel, GitHub Actions</li>
</ul>
<div className="mt-6 flex gap-3">
<a className="px-4 py-2 rounded bg-yellow-400 text-black" href="#">Download CV</a>
<a className="px-4 py-2 rounded border border-gray-700" href="#">Contact</a>
</div>
</div>
</div>
)
}