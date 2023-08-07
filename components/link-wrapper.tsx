import { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

interface LinkWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  external?: boolean
}

export function LinkWrapper({
  href,
  children,
  external = false,
  ...props
}: LinkWrapperProps) {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link"
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className="link" {...props}>
      {children}
    </Link>
  )
}
