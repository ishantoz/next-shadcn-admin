'use client'

import { useMemo } from 'react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// Static data to prevent layout shifts from random values
const data = [
  { name: 'Mon', clicks: 420, uniques: 320 },
  { name: 'Tue', clicks: 580, uniques: 410 },
  { name: 'Wed', clicks: 510, uniques: 380 },
  { name: 'Thu', clicks: 690, uniques: 490 },
  { name: 'Fri', clicks: 750, uniques: 520 },
  { name: 'Sat', clicks: 620, uniques: 450 },
  { name: 'Sun', clicks: 480, uniques: 360 },
]

export function AnalyticsChart() {
  // Memoize to ensure stable reference
  const chartData = useMemo(() => data, [])

  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={chartData}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Area
          type='monotone'
          dataKey='clicks'
          stroke='currentColor'
          className='text-primary'
          fill='currentColor'
          fillOpacity={0.15}
        />
        <Area
          type='monotone'
          dataKey='uniques'
          stroke='currentColor'
          className='text-muted-foreground'
          fill='currentColor'
          fillOpacity={0.1}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
