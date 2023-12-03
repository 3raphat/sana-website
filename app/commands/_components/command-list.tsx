'use client'

import { useState } from 'react'

import { Search } from 'lucide-react'
import { useDebounce } from 'use-debounce'

import { Input } from '@/components/ui/input'

import { CommandCard } from './command-card'

interface CommandListProps {
  data: {
    id: string
    name: string
    description: string
    type: number
  }[]
}

export function CommandList({ data }: CommandListProps) {
  const [search, setSearch] = useState('')
  const [value] = useDebounce(search, 500)

  const filteredData = data.filter(
    (command) =>
      command.name.toLowerCase().includes(value.toLowerCase()) ||
      command.description.toLowerCase().includes(value.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search for commands"
          className="h-12 pl-12 text-base"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredData.map((command) => (
          <CommandCard
            key={command.id}
            name={command.name}
            description={command.description}
            type={command.type}
          />
        ))}
      </div>
    </div>
  )
}
