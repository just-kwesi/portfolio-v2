import { fetchProjects } from '@/lib/api'
import { DemoGithub } from '@/app/ui/projects/project-card'
import { Separator } from '@/app/ui/separator'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/app/ui/page-header'

export default async function Projects() {
  const { items } = await fetchProjects()
  return (
    <div className="flex flex-col items-center justify-center flex-1 max-w-screen-sm mx-auto gap-4">
      <PageHeader>
        <PageHeaderHeading>Projects</PageHeaderHeading>
      </PageHeader>
      {items.map((project, i) => {
        return (
          <>
            <Separator />
            <DemoGithub />
          </>
        )
      })}
    </div>
  )
}
