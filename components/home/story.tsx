import { ReactElement } from 'react'

import Balancer from 'react-wrap-balancer'

function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <ol className="relative space-y-10 border-l border-neutral-200 dark:border-neutral-700">
      {items.map((item) => (
        <TimelineItem key={item.title} {...item} />
      ))}
    </ol>
  )
}

interface TimelineItemProps {
  date: string
  title: string
  description: ReactElement | string
}

function TimelineItem({ date, title, description }: TimelineItemProps) {
  return (
    <li className="ml-4">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-neutral-200 dark:border-neutral-900 dark:bg-neutral-700" />
      <time className="mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
        {date}
      </time>
      <h3 className="font-heading text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-base font-normal text-muted-foreground">
        {description}
      </p>
    </li>
  )
}

const items: TimelineItemProps[] = [
  {
    date: 'November 2021',
    title: 'My first Discord bot project',
    description: (
      <>
        I&apos;m new to code Discord bot, but I want to learn. At the time, I
        started by cloning a repo from someone else and seeing how it worked.
      </>
    ),
  },
  {
    date: 'May 2022',
    title: 'The Old Sana',
    description: (
      <>
        I make my own bot. But I get some issues with verification (a check mark
        in front of the blue bot tag) with this bot when it grows past 100
        servers.
      </>
    ),
  },
  {
    date: 'September 2022',
    title: 'The New Era of Sana',
    description: (
      <>
        I created a new bot with the same name, but this one is more powerful.
        And it has been continuously updated until the version you&apos;re
        using.
      </>
    ),
  },
]

export function Story() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="lg:w-1/2">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          The story of Sana
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          <Balancer>
            Sana was created by a high school student who wanted to listen to
            music on Discord while he was playing games with his friends. But
            he&apos;s annoyed that bot blocks some functions only for premium
            users. So he decided to create his own bot.
          </Balancer>
        </p>
      </div>
      <div className="lg:w-1/2">
        <Timeline items={items} />
      </div>
    </div>
  )
}
