import { Skeleton } from "@/components/ui/skeleton"

export function LoadingApiKey() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-[100px]" />
      </div>
    </div>
  )
}
