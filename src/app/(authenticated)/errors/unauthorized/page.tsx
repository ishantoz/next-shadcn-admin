'use client'

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { UnauthorisedError } from '@/features/errors/unauthorized-error'

export default function UnauthorizedPage() {
  return (
    <>
      <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <AnimatedThemeToggler />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <UnauthorisedError />
      </Main>
    </>
  )
}
