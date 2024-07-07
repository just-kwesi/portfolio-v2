import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card'
import { buttonVariants } from '@/app/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowUpRight, CircleDot, Github } from 'lucide-react'
import { Separator } from '@/app/ui/separator'
import { ProjectItem } from '@/lib/types'

export function ProjectCard({ project }: { project: ProjectItem }) {
  const stack = Object.keys(project.stack)
  return (
    <Card className="max-w-screen-md mx-auto">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{project.projectName}</CardTitle>
          <CardDescription className="pt-1">
            {project.projectDescription}
          </CardDescription>
        </div>
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
              <Github className=" h-4 w-4" />
              <span className="sr-only">Project link plantagram</span>
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
              <ArrowUpRight className=" h-4 w-4" />
              <span className="sr-only">
                {project.projectName} Name github link
              </span>
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap space-x-4 text-sm text-muted-foreground">
          {stack.map((key) => {
            const stackProperties = project.stack[key]
            return (
              <TechStack
                key={key}
                name={key}
                fillColor={stackProperties.color}
              />
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

function TechStack({ name, fillColor }: { name: string; fillColor: string }) {
  return (
    <div className="flex items-center">
      <CircleDot
        className={cn('mr-1 h-3 w-3')}
        style={{ fill: fillColor, color: fillColor }}
      />
      {name}
    </div>
  )
}
