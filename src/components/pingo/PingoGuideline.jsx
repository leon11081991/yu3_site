import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const FeedbackHeader = ({ title }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
    </>
  )
}

FeedbackHeader.propTypes = {
  title: PropTypes.string.isRequired
}

const FeedbackMainContent = ({ images }) => {
  return (
    <div className='w-[87.3%] mx-auto'>
      {images.map(img => (
        <BlurLazyImage
          key={img.id}
          src={img.src}
          alt={img.alt}
          placeholder={img.placeholder}
          width={img.width}
          height={img.height}
        />
      ))}
    </div>
  )
}

FeedbackMainContent.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  ).isRequired
}

const PingoGuideline = ({ title, images }) => {
  return (
    <BaseSectionGrid
      topContent={<FeedbackHeader title={title} />}
      mainContent={<FeedbackMainContent images={images} />}
      hasDivider={false}
    />
  )
}

PingoGuideline.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  ).isRequired
}

export default PingoGuideline
