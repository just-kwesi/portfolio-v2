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
            Hello! I&apos;m Frederick, a software engineer with roots from Ghana
            and creativity blossoming in Austin. Fueled by a passion for
            developing cool software products, my tech toolkit is a blend of{' '}
            <span className="font-bold">Next.js</span>,
            <span className="font-bold"> TypeScript</span> , and{' '}
            <span className="font-bold">Python</span>.
          </Balancer>
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-light">
          <Balancer>
            When I&apos;m not coding, you&apos;ll find me unraveling the
            mysteries of how things work. Welcome to my world of innovative
            development and endless curiosity!
          </Balancer>
        </p>
      </section>
      <SocialLinks />
    </main>
  )
}
