import { BsDiscord, BsGithub } from 'react-icons/bs'
import { GoRepoTemplate } from 'react-icons/go'

import { links } from '@/config/links'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/components/icons'
import { LinkWrapper } from '@/components/link-wrapper'
import { ThemeToggle } from '@/components/theme-toggle'

export function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-neutral-900">
      <div className="mx-auto w-full max-w-7xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <LinkWrapper
            href="/"
            className="mb-4 flex items-center space-x-2 sm:mb-0"
          >
            <Icons.sana className="h-12 w-12" />
            <span className="font-heading text-2xl font-bold">Sana</span>
          </LinkWrapper>
          <ThemeToggle />
        </div>
        <Separator className="my-6 lg:my-8" />
        <div className="flex flex-col justify-between text-center sm:flex-row">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sana. All Rights Reserved.
          </span>
          <div className="mt-4 flex items-center justify-center space-x-5 sm:mt-0">
            <LinkWrapper
              href={links.supportServer}
              className="text-foreground/50 transition-colors hover:text-foreground/80"
            >
              <BsDiscord />
              <span className="sr-only">Discord community</span>
            </LinkWrapper>
            <LinkWrapper
              href={links.github}
              className="text-foreground/50 transition-colors hover:text-foreground/80"
            >
              <BsGithub />
              <span className="sr-only">GitHub</span>
            </LinkWrapper>
            <LinkWrapper
              href={links.templateBot}
              className="text-foreground/50 transition-colors hover:text-foreground/80"
            >
              <GoRepoTemplate />
              <span className="sr-only">Template</span>
            </LinkWrapper>
          </div>
        </div>
      </div>
    </footer>
  )
}
