import { fetchProjects } from '@/lib/api'
import { DemoGithub } from '@/app/ui/projects/project-card'
import { Separator } from '@/app/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/ui/card'
import { buttonVariants, Button } from '@/app/ui/button'
import Link from 'next/link'
import { ArrowUpRight, CircleDot, Github } from 'lucide-react'

export default async function Projects() {
  const { items } = await fetchProjects()
  return (
    <main>
      <Card className="max-w-screen-md mx-auto border-none ">
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>Plantagram</CardTitle>
            <Separator />
            <CardDescription className="pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ipsum ducimus maiores fugit doloremque fugiat quas esse eaque,
              temporibus officia.
            </CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={'/'}
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
              <Github className=" h-4 w-4" />
              <span className="sr-only">Project link plantagram</span>
            </Link>
            <Link
              href={'/'}
              target="_blank"
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
              <ArrowUpRight className=" h-4 w-4" />
              <span className="sr-only">Project link plantagram</span>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleDot className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <CircleDot className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <CircleDot className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
