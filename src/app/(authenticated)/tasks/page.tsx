'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Tasks } from '@/features/tasks'

function TasksContent() {
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

export default function TasksPage() {
  return (
    <Suspense fallback={<div className='flex h-screen items-center justify-center'>Loading...</div>}>
      <TasksContent />
    </Suspense>
  )
}

