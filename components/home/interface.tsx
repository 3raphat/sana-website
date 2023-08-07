'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

import { cn } from '@/lib/utils'
import { Blur } from '@/components/blur'

export function Interface() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="relative">
      <Blur />
      <div className="relative">
        <h2 className="flex flex-wrap items-center justify-center pl-2 text-center font-heading text-3xl font-bold md:text-4xl">
          Easy to Use with a{' '}
          <span className="gradient-text ml-2 pr-2 font-handwritting">
            Beautiful & Clean Interface!{'  '}
          </span>
        </h2>
        <Tilt
          tiltMaxAngleX={2.5}
          tiltMaxAngleY={2}
          glareEnable
          tiltAngleYInitial={0}
          glareMaxOpacity={0.1}
          className={cn(
            'mt-8 overflow-hidden rounded-2xl shadow-xl transition-all',
            isInView && 'animate-image-fade-in',
          )}
        >
          <Image
            src="/interface.png"
            alt="interface"
            width={1280}
            height={720}
            quality={100}
            ref={ref}
          />
        </Tilt>
      </div>
    </div>
  )
}
