'use client'

import { Button } from '@/components/ui/button'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="flex h-screen w-full flex-col items-center justify-center">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Oups ! Une erreur s&apos;est produite.
        </h2>
        <p className="mt-2 leading-7 text-muted-foreground">
          Nous nous excusons pour le désagrément. Notre équipe a été informée et travaille sur le
          problème.
        </p>
        <Button className="mt-8" onClick={reset}>
          Réessayer
        </Button>
      </body>
    </html>
  )
}
