import Link from 'next/link'

import { Button } from '@/shared/ui/button'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl mb-5">404 | Страница не найдена</h1>
      <Link href="/">
        <Button>На главную</Button>
      </Link>
    </div>
  )
}
