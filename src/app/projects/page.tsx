import { CardWrapper } from '@/app/ui/projects/card-wrapper'

import { Suspense } from 'react'
import { CardsSkeleton } from '@/app/ui/skeletons'

export default async function Projects() {
  return (
    <main>
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </main>
  )
}
