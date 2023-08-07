import { LuCode2, LuLanguages } from 'react-icons/lu'
import { TbCurrencyDollarOff } from 'react-icons/tb'
import Balancer from 'react-wrap-balancer'

import { Card } from '@/components/card'
import { LinkWrapper } from '@/components/link-wrapper'

export function Features() {
  return (
    <section>
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          <Balancer>
            Feature-rich commands are the same as the premium plan, but still
            free!
          </Balancer>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          <Balancer>
            Sana&apos;s commands are the same as the premium plan in other music
            bots, but Sana still free! You can use all the commands without any
            payment or votes required.
          </Balancer>
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Free Forever"
          icon={<TbCurrencyDollarOff className="h-6 w-6 text-purple-400" />}
          description={
            <>
              I believe that everyone should have access to a high-quality music
              bot without having to pay for it. If you like Sana, please
              consider supporting me following{' '}
              <LinkWrapper href="/sponsor">this way</LinkWrapper>.
            </>
          }
        />
        <Card
          title="Multiple Languages"
          icon={<LuLanguages className="h-6 w-6 text-purple-400" />}
          description={
            <>
              Sana is available in multiple languages. You can also help{' '}
              <LinkWrapper href="https://crowdin.com/project/sanabot" external>
                translate
              </LinkWrapper>{' '}
              Sana into your language!
            </>
          }
        />
        <Card
          title="Active Development"
          icon={<LuCode2 className="h-6 w-6 text-purple-400" />}
          description={
            <>
              Sana is updated regularly with new features and bug fixes. If you
              have any suggestions, please let me know!
            </>
          }
        />
      </div>
    </section>
  )
}
