import { Skeleton } from '@/app/ui/skeleton'

export function CardsSkeleton() {
  return (
    <div>
      <div className="flex flex-col items-center max-w-screen-md mx-auto border-none">
        <div className="flex gap-3 mt-6 mb-3">
          <Skeleton className="h-4 sm:w-[350px] w-[200px]" />
          <Skeleton className="h-4 sm:w-[150px] w-[100px]" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 sm:w-[500px] w-[300px]" />
          <Skeleton className="h-4 sm:w-[350px] w-[100px]" />
        </div>
      </div>
    </div>
  )
}
