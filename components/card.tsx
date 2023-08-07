'use client'

import { ReactElement, ReactNode } from 'react'

import Tilt from 'react-parallax-tilt'

interface CardProps {
  title: string
  description: string | ReactElement
  icon: ReactNode
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-200 to-white p-px dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900"
    >
      <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-neutral-100 p-8 dark:bg-neutral-900">
        {icon}
        <div>
          <h4 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white">
            {title}
          </h4>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </Tilt>
  )
}
