import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { LinkWrapper } from '@/components/link-wrapper'

export function Hero() {
  return (
    <div className="mx-auto text-center lg:w-2/3">
      <h1 className="bg-gradient-to-br from-primary to-primary/80 bg-clip-text py-2 font-heading text-5xl font-black tracking-tighter text-transparent md:text-7xl md:leading-[5rem]">
        <Balancer>
          Your Melody,
          <br />
          Your Way,
          <br />
          Always Free to Play!
        </Balancer>
      </h1>
      <p className="mt-8 text-xl text-muted-foreground">
        <Balancer>
          The Discord music bot that&apos;s{' '}
          <span className="text-primary">100% free</span> with no payment or
          votes required to access all its amazing functionalities.
        </Balancer>
      </p>
      <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
        <LinkWrapper
          href={links.botInvite}
          external
          className={cn(
            buttonVariants({
              size: 'lg',
            }),
            'w-full rounded-full bg-rose-600 text-rose-50 hover:bg-rose-600/90 sm:w-max',
          )}
        >
          Add to Server 🔗
        </LinkWrapper>
        <LinkWrapper
          href={links.supportServer}
          external
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
            }),
            'w-full rounded-full sm:w-max',
          )}
        >
          Support Server 🛠
        </LinkWrapper>
      </div>
    </div>
  )
}
