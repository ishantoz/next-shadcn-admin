'use client'

import { useSearchParams } from 'next/navigation'
import { Apps } from '@/features/apps'

export default function AppsPage() {
  const searchParams = useSearchParams()
  
  const type = searchParams.get('type') as 'all' | 'connected' | 'notConnected' | undefined
  const filter = searchParams.get('filter') || ''
  const sort = searchParams.get('sort') as 'asc' | 'desc' | undefined

  return (
    <Apps
      type={type}
      filter={filter}
      sort={sort}
    />
  )
}

