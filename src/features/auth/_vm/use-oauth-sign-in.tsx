import { ClientSafeProvider, signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

export function useOAuthSignIn(provider: ClientSafeProvider) {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  const oauthSignInMutation = useMutation({
    mutationFn: () =>
      signIn(provider.id, {
        callbackUrl: callbackUrl ?? undefined,
      }),
  })

  return {
    isPending: oauthSignInMutation.isPending,
    signIn: oauthSignInMutation.mutate,
  }
}
