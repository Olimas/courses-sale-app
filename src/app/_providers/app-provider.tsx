'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { ComposeChildren } from '@/shared/lib/react'
import { queryClient } from '@/shared/api/query-client'
import { ThemeProvider } from '@/features/theme/theme-provider'
import { AppSessionProvider } from '@/entities/user/session'

export function AppProvider(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  )
}
