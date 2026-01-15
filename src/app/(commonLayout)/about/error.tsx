"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function AboutError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <p className="text-red-500 font-medium">
        Something went wrong. Please try again.
      </p>

      <Button onClick={() => reset()}>
        Retry
      </Button>
    </div>
  )
}
