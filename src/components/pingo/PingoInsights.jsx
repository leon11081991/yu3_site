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
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}

const InsightsHeader = ({ title, descriptions }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      <DescriptionBlock items={descriptions} />
    </>
  )
}

InsightsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired
}

const InsightsMainContent = ({ images }) => {
  return (
    <div className='w-[88.5%] mx-auto'>
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

InsightsMainContent.propTypes = {
  images: PropTypes.array.isRequired
}

const PingoInsights = ({ title, descriptions, images }) => {
  return (
    <BaseSectionGrid
      topContent={
        <InsightsHeader
          title={title}
          descriptions={descriptions}
        />
      }
      mainContent={<InsightsMainContent images={images} />}
    />
  )
}

PingoInsights.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired
}

export default PingoInsights
