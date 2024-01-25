import { WorkCardWrapper } from '@/app/ui/work/work-card-wrapper'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { CardsSkeleton } from '@/app/ui/skeletons'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'A list of places where i have worked and some work details.',
}

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
