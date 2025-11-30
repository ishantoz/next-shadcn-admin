'use client'

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { UsersDialogs } from './components/users-dialogs'
import { UsersPrimaryButtons } from './components/users-primary-buttons'
import { UsersProvider } from './components/users-provider'
import { UsersTable } from './components/users-table'
import { users } from './data/users'

type UsersProps = {
  page?: number
  pageSize?: number
  status?: string[]
  role?: string[]
  username?: string
}

export function Users({
  page = 1,
  pageSize = 10,
  status = [],
  role = [],
  username = '',
}: UsersProps) {
  const search = { page, pageSize, status, role, username }

  return (
    <UsersProvider>
      <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <AnimatedThemeToggler />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-muted-foreground'>
              Manage your users and their roles here.
            </p>
          </div>
          <UsersPrimaryButtons />
        </div>
        <UsersTable data={users} search={search} />
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
