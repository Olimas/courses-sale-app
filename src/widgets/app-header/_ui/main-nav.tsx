import Link from 'next/link'

const mainNavLinks = [
  {
    name: 'Карта',
    url: '/map',
  },
  {
    name: 'Обучение',
    url: '/learn',
  },
]

export function MainNav() {
  const defaultProps = {
    className: 'transition-colors hover:text-foreground/80 text-foreground/60',
  }

  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
      {mainNavLinks.map(link => (
        <Link
          key={link.name}
          className={defaultProps.className}
          href={link.url}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
