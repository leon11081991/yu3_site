import PropTypes from 'prop-types'

const BaseVideo = ({ videoSrc, videoLabel }) => {
  return (
    <div className=''>
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

BaseVideo.propTypes = {
  videoSrc: PropTypes.string,
  videoLabel: PropTypes.string
}

export default BaseVideo
