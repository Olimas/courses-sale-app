import { Profile } from '../_domain/types'

import { getProfileLetters } from '../_vm/get-profile-letters'
import { cn } from '@/shared/ui/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'

interface IProfileAvatarProps {
  profile?: Profile
  className?: string
}

export const ProfileAvatar = (props: IProfileAvatarProps) => {
  const { profile, className } = props

  if (!profile) {
    return null
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={profile.image ?? ''} className="object-cover" />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  )
}
