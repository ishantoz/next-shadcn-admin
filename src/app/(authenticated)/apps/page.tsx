'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Apps } from '@/features/apps'

function AppsContent() {
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

export default function AppsPage() {
  return (
    <Suspense fallback={<div className='flex h-screen items-center justify-center'>Loading...</div>}>
      <AppsContent />
    </Suspense>
  )
}

