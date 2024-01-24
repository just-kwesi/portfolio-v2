import { WorkItem } from '@/lib/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card'

export function WorkCard({ work }: { work: WorkItem }) {
  return (
    <Card className="max-w-screen-md mx-auto border-none ">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{work.company}</CardTitle>
          <CardDescription>{work.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-light">
          {work.jobDescription}
        </p>
      </CardContent>
    </Card>
  )
}
