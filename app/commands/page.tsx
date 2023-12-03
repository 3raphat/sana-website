import Balancer from 'react-wrap-balancer'

import { Separator } from '@/components/ui/separator'

import { CommandList } from './_components/command-list'

async function getData() {
  const baseUrl = 'https://discord.com/api/v10'

  const res = await fetch(
    `${baseUrl}/applications/${process.env.CLIENT_ID}/commands`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bot ${process.env.BOT_TOKEN}`,
      },
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return (await res.json()) as {
    id: string
    name: string
    description: string
    type: number
  }[]
}

export default async function Page() {
  const data = await getData()
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h1 className="font-heading text-4xl font-bold lg:text-5xl">
          Sana Commands
        </h1>
        <p className="text-xl text-muted-foreground">
          <Balancer>
            Are you new to Sana? You can find all the commands here!
          </Balancer>
        </p>
      </div>
      <Separator />
      <CommandList data={data} />
    </div>
  )
}
