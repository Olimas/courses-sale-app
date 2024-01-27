'use client'

import { useEffect } from 'react'
import { signIn } from 'next-auth/react'

import { useAppSession } from '@/entities/user/session.client'
import { FullPageSpinner } from '@/shared/ui/full-page-spinner'

export default function AuthorizedGuard({ children }: React.PropsWithChildren) {
  const session = useAppSession()

  const isAuthenticated = session.status === 'authenticated'
  const isUnauthenticated = session.status === 'unauthenticated'

  useEffect(() => {
    if (isUnauthenticated) {
      signIn()
    }
  }, [isUnauthenticated])

  const isLoading = session.status === 'loading' || isUnauthenticated

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {isAuthenticated && children}
    </>
  )
}
