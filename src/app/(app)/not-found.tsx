'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Custom404App() {
  const router = useRouter()

  return (
    <div className="dark flex h-full w-full flex-col items-center justify-center bg-background text-primary">
      <Image
        src="data:image/png;base64,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"
        alt=""
        width={600}
        height={200}
      />

      <div className="my-6 flex flex-col justify-start space-y-2">
        <h1 className="text-center text-4xl font-bold">404</h1>
        <p className="text-center font-light">
          Página não encontrada ou indisponível
        </p>
        <Button variant="outline" onClick={() => router.back()}>
          Voltar
        </Button>
      </div>
    </div>
  )
}
