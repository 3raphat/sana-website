'use client'

import { useState } from 'react'

import { useMotionValueEvent, useScroll } from 'framer-motion'
import { FaHandHoldingHeart } from 'react-icons/fa6'
import { LuMenu } from 'react-icons/lu'

import { links } from '@/config/links'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Icons } from '@/components/icons'
import { LinkWrapper } from '@/components/link-wrapper'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const { scrollY } = useScroll()

  const [position, setPosition] = useState(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setPosition(latest)
  })

  return (
    <div
      className={cn(
        'fixed z-50 flex h-20 w-full transform-gpu items-center bg-transparent transition-all duration-300',
        position > 180 && 'h-16 border-b bg-background/60 backdrop-blur-md',
      )}
    >
      <div className="container">
        <MainNav />
      </div>
    </div>
  )
}

function MainNav() {
  return (
    <div className="flex justify-between">
      <LinkWrapper href="/" className="mr-6 flex items-center space-x-2">
        <Icons.sana className="h-10 w-10" />
        <span className="hidden font-heading text-2xl font-bold sm:inline-block">
          Sana
        </span>
      </LinkWrapper>
      {/* MainNave */}
      <nav className="hidden items-center space-x-6 text-sm font-medium sm:flex">
        <LinkWrapper
          href="/how-to-support"
          className={cn(
            buttonVariants({
              variant: 'ghost',
            }),
            'text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500',
          )}
        >
          <FaHandHoldingHeart className="mr-2 h-4 w-4" />
          How to Support
        </LinkWrapper>
        <LinkWrapper
          href={links.botInvite}
          external
          className={cn(
            buttonVariants(),
            'bg-rose-600 text-rose-50 hover:bg-rose-600/90',
          )}
        >
          Invite Sana
        </LinkWrapper>
      </nav>
      {/* MobileNav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="sm:hidden">
            <LuMenu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <nav className="mt-8 flex flex-col items-center space-y-6 text-sm font-medium">
            <LinkWrapper
              href="/sponsor"
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'w-full text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500 sm:w-max',
              )}
            >
              <FaHandHoldingHeart className="mr-2 h-4 w-4" />
              Sponsor
            </LinkWrapper>
            <LinkWrapper
              href={links.botInvite}
              external
              className={cn(
                buttonVariants(),
                'w-full bg-rose-600 text-rose-50 hover:bg-rose-600/90 sm:w-max',
              )}
            >
              Invite Sana
            </LinkWrapper>
            <Separator />
            <div className="w-full text-right">
              <ThemeToggle side="bottom" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
