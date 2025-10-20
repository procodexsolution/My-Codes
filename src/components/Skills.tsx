import { skills } from "../../data/skills"


export default function Skills(){
return (
<section className="py-12 bg-[rgba(255,255,255,0.01)] overflow-x-hidden">
<div className="container text-center">
<h3 className="text-2xl font-semibold gradient-text">Expertise Across Modern Technologies</h3>
<p className="text-gray-400 mt-2">Tools, frameworks and libraries I use daily.</p>
<div className="mt-6 flex flex-wrap items-center justify-center gap-4">
{skills.map(s=> (
<div key={s} className="p-3 card text-sm">{s}</div>
))}
</div>
</div>
</section>
)
}