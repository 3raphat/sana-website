import { links } from '@/config/links'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Blur2 } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export function CTA() {
  return (
    <div className="relative pb-16">
      <Blur2 />
      <div className="relative">
        <div className="mt-6 space-y-8 text-center">
          <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
            Tired of paying for premium?
          </h1>
          <LinkWrapper
            href={links.botInvite}
            external
            className={cn(
              buttonVariants({
                size: 'lg',
              }),
              'h-12 rounded-full bg-rose-600 text-rose-50 hover:bg-rose-600/90',
            )}
          >
            Invite Sana Now 🔥
          </LinkWrapper>
        </div>
      </div>
    </div>
  )
}
