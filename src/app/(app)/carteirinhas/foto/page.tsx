'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

export default function CarteirinhasFoto() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'environment',
  }

  const webcamRef = useRef<Webcam>(null)
  const [url, setUrl] = useState<string | null>(null)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      setUrl(imageSrc)
    }
  }, [webcamRef])

  return (
    <div>
      {!url && (
        <div>
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <Button className="w-full" onClick={capture}>
            Tirar foto
          </Button>
        </div>
      )}
      {url && (
        <div>
          <div>
            <Image src={url} alt="Screenshot" />
          </div>
          <div className="flex flex-row space-x-2">
            <Button
              onClick={() => {
                setUrl(null)
              }}
              className="w-full"
            >
              Tirar novamente
            </Button>
            <Button className="w-full">Confirmar</Button>
          </div>
        </div>
      )}
    </div>
  )
}
