import Balancer from 'react-wrap-balancer'

export function QuickStart() {
  return (
    <div>
      <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
        Quick Start
      </h2>
      <ol className="my-8 grid gap-4 md:grid-cols-3">
        <li className="flex items-center space-x-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xl dark:bg-rose-900/20">
            1
          </span>
          <span>
            <h3 className="font-heading text-xl font-semibold dark:text-pink-300">
              Invite
            </h3>
            <p className="mt-2 text-muted-foreground">
              <Balancer>
                Invite Sana to your server by using the invite button on the
                top.
              </Balancer>
            </p>
          </span>
        </li>
        <li className="flex items-center space-x-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xl dark:bg-rose-900/20">
            2
          </span>
          <span>
            <h3 className="font-heading text-xl font-semibold dark:text-pink-300">
              Type <code>/play</code>
            </h3>
            <p className="mt-2 text-muted-foreground">
              <Balancer>
                Join a voice channel and type <code>/play</code> in any text
                channel.
              </Balancer>
            </p>
          </span>
        </li>
        <li className="flex items-center space-x-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xl dark:bg-rose-900/20">
            3
          </span>
          <span>
            <h3 className="font-heading text-xl font-semibold dark:text-pink-300">
              Done! 🎉
            </h3>
            <p className="mt-2 text-muted-foreground">
              <Balancer>
                Enjoy your music! Type <code>/help</code> to see all the
                commands you can use.
              </Balancer>
            </p>
          </span>
        </li>
      </ol>
    </div>
  )
}
