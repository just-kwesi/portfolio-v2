import { fetchProjects } from '@/lib/api'

export default async function Projects() {
  const { items } = await fetchProjects()
  return (
    <div className="flex items-center justify-center flex-1">
      {items.map((project, i) => {
        return <div key={project.title}>{project.title}</div>
      })}
    </div>
  )
}
