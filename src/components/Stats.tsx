export default function Stats(){
const items = [
{label: 'Projects', value: '10+'},
{label: 'Clients', value: '50+'},
{label: 'Success', value: '98%'},
{label: 'Hours', value: '100+'}
]
return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center overflow-x-hidden">
{items.map(i=> (
<div key={i.label} className="card p-6">
<div className="text-2xl font-bold">{i.value}</div>
<div className="text-sm text-gray-400 mt-1">{i.label}</div>
</div>
))}
</div>
)
}