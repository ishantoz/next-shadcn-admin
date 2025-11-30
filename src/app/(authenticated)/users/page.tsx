'use client'

import { useSearchParams } from 'next/navigation'
import { Users } from '@/features/users'
import { roles } from '@/features/users/data/data'

export default function UsersPage() {
  const searchParams = useSearchParams()
  
  // Parse search params similar to TanStack Router
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const pageSize = searchParams.get('pageSize') ? Number(searchParams.get('pageSize')) : 10
  const status = searchParams.get('status')?.split(',') || []
  const role = searchParams.get('role')?.split(',') || []
  const username = searchParams.get('username') || ''

  return (
    <Users
      page={page}
      pageSize={pageSize}
      status={status as any}
      role={role as any}
      username={username}
    />
  )
}

