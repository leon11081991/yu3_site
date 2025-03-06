import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import SitemapIndicator from '@/components/SitemapIndicator'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const SitemapHeader = ({ title, description, indicators }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      <div className='flex flex-col gap-4'>
        {description && <p className='text-p1'>{description}</p>}
        <SitemapIndicator indicators={indicators} />
      </div>
    </>
  )
}

SitemapHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  indicators: PropTypes.array.isRequired
}

const SitemapMainContent = ({ picture }) => {
  const containerWidth = (picture.width / 1122) * 100
  return (
    <div>
      <div
        className='md:mx-auto min-w-[100%] md:min-w-min'
        style={{ width: `${containerWidth}%` }}
      >
        <BlurLazyImage
          src={picture.src}
          alt={picture.alt}
          placeholder={picture.placeholder}
          width={picture.width}
          height={picture.height}
        />
      </div>
    </div>
  )
}

SitemapMainContent.propTypes = {
  picture: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
}

const ProjectSitemap = ({ title, description, indicators, picture }) => {
  return (
    <BaseSectionGrid
      topContent={
        <SitemapHeader
          title={title}
          description={description}
          indicators={indicators}
        />
      }
      mainContent={<SitemapMainContent picture={picture} />}
    />
  )
}

ProjectSitemap.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  indicators: PropTypes.array.isRequired,
  picture: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
}

export default ProjectSitemap
