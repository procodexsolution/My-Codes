'use client'
import React from 'react'
import CountUp from 'react-countup'

export default function Stats() {
  const items = [
    { label: 'Projects', value: 10, suffix: '+' },
    { label: 'Clients', value: 50, suffix: '+' },
    { label: 'Success', value: 98, suffix: '%' },
    { label: 'Hours', value: 100, suffix: '+' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center overflow-x-hidden py-10">
      {items.map((i) => (
        <div key={i.label} className="card p-6">
          <div className="text-3xl sm:text-4xl font-bold text-white">
            <CountUp end={i.value} duration={2.5} />
            {i.suffix}
          </div>
          <div className="text-sm text-gray-400 mt-1">{i.label}</div>
        </div>
      ))}
    </div>
  )
}
