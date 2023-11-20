import { ReactElement } from 'react'

import { LuExternalLink } from 'react-icons/lu'
import { SiBuymeacoffee, SiKofi, SiPatreon } from 'react-icons/si'
import Balancer from 'react-wrap-balancer'

import { links as l } from '@/config/links'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Blur } from '@/components/blur'
import { Icons } from '@/components/icons'
import { LinkWrapper } from '@/components/link-wrapper'

interface Link {
  label: string
  url: string
  icon?: ReactElement
  color?: string
  isFree?: boolean
}

const links: Link[] = [
  {
    label: 'Top.gg',
    url: l.topgg,
    icon: <Icons.topgg className="h-8 w-8 text-white" />,
    color: 'bg-[#FF3366]',
    isFree: true,
  },
  {
    label: 'Patreon',
    url: l.patreon,
    icon: <SiPatreon className="h-6 w-6 text-white" />,
    color: 'bg-[#FF424D]',
    isFree: false,
  },
  {
    label: 'Ko-fi',
    url: l.kofi,
    icon: <SiKofi className="h-6 w-6 text-white" />,
    color: 'bg-[#13C3FF]',
    isFree: false,
  },
  {
    label: 'Buy Me a Coffee',
    url: l.buymeacoffee,
    icon: <SiBuymeacoffee className="h-6 w-6 text-neutral-900" />,
    color: 'bg-[#FFDD00]',
    isFree: false,
  },
]

export default function Page() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold lg:text-5xl">
            Support Sana
          </h1>
          <p className="text-xl text-muted-foreground">
            <Balancer>
              Thank you for considering supporting Sana! I really appreciate it.
            </Balancer>
          </p>
        </div>
        <Separator className="my-4" />
        <div className="mt-8 flex flex-col space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Free ways</h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                You can support me by voting for Sana, inviting Sana to your
                server, or joining the support server.
              </Balancer>
            </p>
            <div className="mt-6 flex flex-wrap items-start space-x-12 space-y-6">
              {links.map(
                (link) =>
                  link.isFree && (
                    <LinkWrapper
                      key={link.url}
                      href={link.url}
                      className="group inline-flex items-center justify-center space-x-4"
                      external
                    >
                      <span
                        className={cn(
                          'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                          link.color,
                        )}
                      >
                        {link.icon}
                      </span>
                      <h3 className="font-heading text-xl font-semibold">
                        {link.label} <LuExternalLink className="inline" />
                      </h3>
                    </LinkWrapper>
                  ),
              )}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">Paid ways</h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                You can support me by donating to me. It will make me very
                happy. I promise.
              </Balancer>
            </p>
            <div className="mt-6 grid grid-cols-1 place-items-start gap-8 sm:grid-cols-3">
              {links.map(
                (link) =>
                  !link.isFree && (
                    <LinkWrapper
                      key={link.url}
                      href={link.url}
                      className="group inline-flex items-center justify-center space-x-4"
                      external
                    >
                      <span
                        className={cn(
                          'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                          link.color,
                        )}
                      >
                        {link.icon}
                      </span>
                      <h3 className="font-heading text-xl font-semibold">
                        {link.label} <LuExternalLink className="inline" />
                      </h3>
                    </LinkWrapper>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
