import { fetchWorkExperience } from '@/lib/api'
import { WorkItem } from '@/lib/types'
import { WorkCard } from './work-card'

export async function WorkCardWrapper() {
  const { items } = await fetchWorkExperience()
  return (
    <div className="space-y-7">
      {!!items.length &&
        items.map((work: WorkItem) => {
          return <WorkCard key={work.company} work={work} />
        })}
    </div>
  )
}
