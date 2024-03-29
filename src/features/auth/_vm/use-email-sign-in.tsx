import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

export function useEmailSignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const emailSignInMutation = useMutation({
    mutationFn: (email: string) =>
      signIn('email', {
        email,
        callbackUrl: callbackUrl ?? undefined,
      }),
  })

  return {
    signIn: emailSignInMutation.mutate,
    isPending: emailSignInMutation.isPending,
    error: emailSignInMutation.error,
  }
}
