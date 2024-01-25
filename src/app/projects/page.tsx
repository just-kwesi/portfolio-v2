import { CardWrapper } from '@/app/ui/projects/card-wrapper'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { CardsSkeleton } from '@/app/ui/skeletons'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A list of some projects i have worked on.',
}

export default async function Projects() {
  return (
    <main>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 pl-6 max-w-screen-md mx-auto mb-5 pt-6">
        Projects
      </h2>
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </main>
  )
}
