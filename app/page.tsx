import { Blur2 } from '@/components/blur'
import { CTA } from '@/components/home/cta'
import { FAQ } from '@/components/home/faq'
import { Features } from '@/components/home/features'
import { Hero } from '@/components/home/hero'
import { Interface } from '@/components/home/interface'
import { QuickStart } from '@/components/home/quick-start'
import { Story } from '@/components/home/story'

export default function Home() {
  return (
    <div className="relative">
      <Blur2 />
      <div className="relative space-y-40">
        <Hero />
        <QuickStart />
        <Story />
        <Interface />
        <Features />
        <FAQ />
        <CTA />
      </div>
    </div>
  )
}
