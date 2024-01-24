import { WorkCardWrapper } from '@/app/ui/work/work-card-wrapper'

import { Suspense } from 'react'
import { CardsSkeleton } from '@/app/ui/skeletons'

export default async function Work() {
  return (
    <main>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 pl-6 max-w-screen-md mx-auto mb-5 pt-6">
        Experience
      </h2>
      <Suspense fallback={<CardsSkeleton />}>
        <WorkCardWrapper />
      </Suspense>
    </main>
  )
}
