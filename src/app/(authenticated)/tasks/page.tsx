'use client'

import { useSearchParams } from 'next/navigation'
import { Tasks } from '@/features/tasks'

export default function TasksPage() {
  const searchParams = useSearchParams()
  
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const pageSize = searchParams.get('pageSize') ? Number(searchParams.get('pageSize')) : 10
  const status = searchParams.get('status')?.split(',') || []
  const priority = searchParams.get('priority')?.split(',') || []
  const filter = searchParams.get('filter') || ''

  return (
    <Tasks
      page={page}
      pageSize={pageSize}
      status={status as any}
      priority={priority as any}
      filter={filter}
    />
  )
}

