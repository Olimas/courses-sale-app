'use client'

import { ThemeProvider } from '@/features/theme/theme-provider'
import { ComposeChildren } from '@/shared/lib/react'

export function AppProvider(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <ComposeChildren>
      <ThemeProvider>{children}</ThemeProvider>
    </ComposeChildren>
  )
}
