import { AppHeader } from '@/widgets/app-header/app-header'
import AuthorizedGuard from '@/features/auth/authorized-guard'

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AppHeader variant="private" />
      <AuthorizedGuard>{children}</AuthorizedGuard>
    </>
  )
}
