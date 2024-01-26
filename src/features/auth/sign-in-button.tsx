'use client'

import { signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export function SignInButton() {
  const handleSignOut = () => signIn()

  return (
    <Button variant="outline" onClick={handleSignOut}>
      <LogIn className="mr-2 h-4 w-4" />
      Войти
    </Button>
  )
}
