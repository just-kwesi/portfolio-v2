import { fetchProjects } from '@/lib/api'
import { ProjectItem } from '@/lib/types'
import { ProjectCard } from './project-card'

export async function CardWrapper() {
  const { items } = await fetchProjects()
  return (
    <div className="space-y-7">
      {items.map((project: ProjectItem) => {
        return <ProjectCard project={project} key={project.projectName} />
      })}
    </div>
  )
}
