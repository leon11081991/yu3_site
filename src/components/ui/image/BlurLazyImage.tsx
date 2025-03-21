import React, { useEffect, useRef, useState } from 'react'

interface BlurLazyImageProps {
  src: string
  alt: string
  placeholder?: string
  width: number
  height: number
  className?: string
}

const BlurLazyImage: React.FC<BlurLazyImageProps> = ({
  src,
  alt,
  placeholder,
  width = 800,
  height = 500,
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const imgElement = imgRef.current
    if (!imgElement) return

    const handleLoad = () => setIsLoaded(true)

    // 檢查圖片是否載入完成
    if (imgElement.complete) {
      handleLoad()
    } else {
      imgElement.addEventListener('load', handleLoad)
    }

    // 組件卸載時移除事件監聽
    return () => {
      imgElement.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div
      className={`relative bg-cover bg-center w-full h-full ${isLoaded ? 'blur-0' : 'blur-md'}`}
      style={{ backgroundImage: `url(${placeholder})` }}
    >
      <img
        ref={imgRef}
        loading='lazy'
        className={`w-full block object-cover object-center opacity-0 transition ${isLoaded ? 'opacity-100' : ''} ${className}`}
        src={src}
        alt={alt}
        style={{ aspectRatio: `${width}/${height}` }}
      />
    </div>
  )
}

export default BlurLazyImage
