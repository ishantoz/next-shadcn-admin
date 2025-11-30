'use client'
import { ProgressProvider } from '@bprogress/next/app'

export default function ProgressLoader({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProgressProvider
      height='3px'
      color={`#4ba3f7`}
      options={{ showSpinner: false }}
      shallowRouting
      delay={70}
    >
      {children}
    </ProgressProvider>
  )
}
