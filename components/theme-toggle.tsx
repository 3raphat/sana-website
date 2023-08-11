'use client'

import { useTheme } from 'next-themes'
import { LuMoon, LuSun } from 'react-icons/lu'

import { capitalize } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ThemeToggleProps {
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export function ThemeToggle({ side = 'top' }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {resolvedTheme === 'light' ? (
            <LuSun className="mr-2 h-4 w-4" />
          ) : (
            <LuMoon className="mr-2 h-4 w-4" />
          )}
          {capitalize(theme ?? 'system')}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side={side}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
