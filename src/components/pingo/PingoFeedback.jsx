import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import TextWithTitle from '@/components/ui/text/TextWithTitle'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const DescriptionBlock = ({ items }) => {
  return items.map(({ id, label, content }) => (
    <TextWithTitle
      key={id}
      label={label}
      content={content}
    />
  ))
}

DescriptionBlock.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}

const FeedbackHeader = ({ title, descriptions }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      <DescriptionBlock items={descriptions} />
    </>
  )
}

FeedbackHeader.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array
}

const FeedbackMainContent = ({ images }) => {
  return (
    <div className='w-[77%] mx-auto'>
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

const PingoFeedback = ({ title, descriptions, images }) => {
  return (
    <BaseSectionGrid
      topContent={
        <FeedbackHeader
          title={title}
          descriptions={descriptions}
        />
      }
      mainContent={<FeedbackMainContent images={images} />}
      hasDivider={false}
      noPb={true}
    />
  )
}

PingoFeedback.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array,
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

export default PingoFeedback
