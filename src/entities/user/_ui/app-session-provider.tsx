'use client'

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'

export function AppSessionProvider(props: React.PropsWithChildren) {
  const { children } = props

  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}
