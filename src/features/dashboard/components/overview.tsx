'use client'

import { useMemo } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// Static data to prevent layout shifts from random values
const data = [
  { name: 'Jan', total: 3200 },
  { name: 'Feb', total: 2800 },
  { name: 'Mar', total: 3500 },
  { name: 'Apr', total: 4100 },
  { name: 'May', total: 3800 },
  { name: 'Jun', total: 4500 },
  { name: 'Jul', total: 4200 },
  { name: 'Aug', total: 4900 },
  { name: 'Sep', total: 4600 },
  { name: 'Oct', total: 5300 },
  { name: 'Nov', total: 5000 },
  { name: 'Dec', total: 5700 },
]

export function Overview() {
  // Memoize to ensure stable reference
  const chartData = useMemo(() => data, [])
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={chartData}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          direction='ltr'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
