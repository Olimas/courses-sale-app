import { AppHeader } from '@/widgets/app-header/app-header'

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AppHeader variant="private" />
      {children}
    </>
  )
}
