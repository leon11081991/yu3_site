interface BaseVideoProps {
  videoSrc: string
  videoLabel: string
}

const BaseVideo = ({ videoSrc, videoLabel }: BaseVideoProps) => {
  return (
    <div className='rounded-lg overflow-hidden'>
      <video
        className='aspect-video w-full h-auto object-cover'
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
