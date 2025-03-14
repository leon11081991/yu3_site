import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import BaseVideo from '@/components/ui/BaseVideo'

const ProjectDemoVideo = ({ videoSrc, videoLabel }) => {
  return (
    <ContentContainer className='bg-gray-01'>
      <section className='w-full bg-gray-01'>
        <div className='mt-36 mb-36 w-[71%] mx-auto'>
          <BaseVideo
            videoSrc={videoSrc}
            videoLabel={videoLabel}
          />
        </div>
      </section>
    </ContentContainer>
  )
}

ProjectDemoVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  videoLabel: PropTypes.string
}

export default ProjectDemoVideo
