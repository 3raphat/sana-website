import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LinkWrapper } from '@/components/link-wrapper'

const faq = [
  {
    question: 'Why is name Sana?',
    answer: (
      <>
        Sana means &quot;brilliant&quot; or &quot;praise&quot; in Arabic, and it
        can also mean &quot;gauze of summer&quot; or &quot;one who helps
        others&quot; in Japanese.
        <br />
        <br />I chose this name because I want Sana to be a bot that helps
        others and is always brilliant.
        <br />
        <br />
        But in reality, I just like the letter &quot;S&quot; and this name comes
        from Sana Minatozaki, a member of Twice.
      </>
    ),
  },
  {
    question: 'Sana source code?',
    answer: (
      <>
        I don&apos;t plan on open-sourcing Sana. I don&apos;t want other people
        to see my messy code 😅. But I created a template for you to create your
        own Discord bot. You can find it{' '}
        <LinkWrapper href={links.templateBot}>here</LinkWrapper>.
      </>
    ),
  },
  {
    question: 'Sana is really free?',
    answer: (
      <>
        Yes, Sana is resolutely free. You can use all the commands without
        payment or votes required.
      </>
    ),
  },
  {
    question: 'Why is Sana sometimes offline or not working?',
    answer: (
      <>
        Sana is developed by a single developer. So sometimes I missed
        something, and Sana is not working correctly. If you find any bugs,
        please report them to me. I will fix it ASAP.
      </>
    ),
  },
  {
    question: 'Why does music sometimes play and then suddenly stop?',
    answer: (
      <>
        This is because I updated something that changed in Sana. So the bot was
        down for a few minutes. I&apos;m sorry for this inconvenience.
      </>
    ),
  },
]

export function FAQ() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="text-center lg:w-5/12 lg:text-left">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          <Balancer>Frequently asked questions</Balancer>
        </h2>
        <p className="mt-4 text-muted-foreground">
          <Balancer>
            Here are some of the most common questions. If you have any other
            questions, feel free to reach out to us at{' '}
            <LinkWrapper href={links.supportServer} external>
              Support Server
            </LinkWrapper>
            .
          </Balancer>
        </p>
      </div>
      <div className="lg:w-7/12">
        <Accordion type="multiple">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
