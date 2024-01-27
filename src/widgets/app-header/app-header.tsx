import { ToggleTheme } from '@/features/theme/toggle-theme'
import { Layout } from './_ui/layout'
import { Logo } from './_ui/logo'
import { MainNav } from './_ui/main-nav'
import { Profile } from './_ui/profile'

interface IAppHeaderProps {
  variant: 'auth' | 'private' | 'public'
}

export function AppHeader(props: IAppHeaderProps) {
  const { variant } = props
  const isProfile = variant !== 'auth'

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  )
}
