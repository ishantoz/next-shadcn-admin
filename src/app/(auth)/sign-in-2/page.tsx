'use client'

import { Suspense } from 'react'
import { SignIn } from '@/features/auth/sign-in'

function SignInFallback() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-muted-foreground'>Loading...</div>
    </div>
  )
}

export default function SignIn2Page() {
  return (
    <Suspense fallback={<SignInFallback />}>
      <SignIn />
    </Suspense>
  )
}

