'use client'

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { MaintenanceError } from '@/features/errors/maintenance-error'

export default function MaintenanceErrorPage() {
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
        <MaintenanceError />
      </Main>
    </>
  )
}
