'use client'

import {
  SessionProvider as NextAuthSessionProvider,
  useSession,
} from 'next-auth/react'

export const useAppSession = useSession

export const useRole = () => {
  const session = useAppSession()
  return session?.data?.user?.role
}

export function AppSessionProvider(props: React.PropsWithChildren) {
  const { children } = props

  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}
