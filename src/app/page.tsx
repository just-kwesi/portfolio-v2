import Balancer from 'react-wrap-balancer'
import { cn } from '@/lib/utils'
import SocialLinks from '@/app/ui/social-links'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-10 justify-start p-10 sm:p-24 ">
      <div className="space-y-2">
        <h1
          className={cn(
            'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl'
          )}
        >
          Frederick Tetteh
        </h1>

        <p className="text-xl text-muted-foreground font-light">
          <Balancer>Software Engineer</Balancer>
        </p>
      </div>

      <section>
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-light">
          <Balancer>
            Hello! I&apos;m Frederick, a software engineer with roots in Ghana
            and creativity blossoming in Austin. My passion lies in developing
            innovative software solutions, leveraging technologies like{' '}
            <span className="font-bold">Next.js</span>,
            <span className="font-bold"> TypeScript</span> , and{' '}
            <span className="font-bold">Python</span>.
          </Balancer>
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-light">
          <Balancer>
            I thrive on unraveling the mysteries of technology and transforming
            ideas into impactful products.
          </Balancer>
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-light">
          <Balancer>
            When I&apos;m not coding, I&apos;m exploring how things work and
            constantly fueling my curiosity. Welcome to my world of innovative
            development and endless exploration!
          </Balancer>
        </p>
      </section>
      <SocialLinks />
    </main>
  )
}
