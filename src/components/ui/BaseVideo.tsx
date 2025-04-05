interface BaseVideoProps {
  videoSrc: string
  videoLabel: string
  width?: number
  height?: number
  className?: string
}

const BaseVideo = ({
  videoSrc,
  videoLabel,
  width = 800,
  height = 500,
  className
}: BaseVideoProps) => {
  // const [isLoaded, setIsLoaded] = useState(false)
  const rounded = width && height ? `rounded-md` : 'rounded-lg'
  return (
    <div className='relative'>
      <video
        className={`aspect-[${width}/${height}] w-full h-auto object-cover ${className} overflow-hidden ${rounded}`}
        preload='metadata'
        src={videoSrc}
        aria-label={videoLabel}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default BaseVideo
