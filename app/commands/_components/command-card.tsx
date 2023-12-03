'use client'

import Tilt from 'react-parallax-tilt'

import { Badge } from '@/components/ui/badge'

interface CommandCardProps {
  name: string
  description: string
  type: number
}

enum CommandType {
  ChatInput = 1,
  User = 2,
  Message = 3,
}

export function CommandCard({ name, description, type }: CommandCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-200 to-white p-px dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900"
    >
      <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-neutral-100 p-6 dark:bg-neutral-900">
        <div>
          <Badge className="mb-2" variant="outline">
            {type === CommandType.ChatInput
              ? 'Slash Command'
              : type === CommandType.User
              ? 'User Context Menu'
              : type === CommandType.Message
              ? 'Message Context Menu'
              : 'Unknown'}
          </Badge>
          <h4 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white">
            {type === CommandType.ChatInput ? '/' : ''}
            {name}
          </h4>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </Tilt>
  )
}
