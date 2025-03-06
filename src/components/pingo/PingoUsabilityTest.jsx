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

const UsabilityTestHeader = ({ title, descriptions }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      <DescriptionBlock items={descriptions} />
    </>
  )
}

UsabilityTestHeader.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}

const UsabilityTestMainContent = ({ images }) => {
  return (
    <div className='bg-gray-01 py-9  '>
      <div className='w-full md:w-[95.2%] mx-auto'>
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
    </div>
  )
}

UsabilityTestMainContent.propTypes = {
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

const PingoUsabilityTest = ({ title, descriptions, images }) => {
  return (
    <BaseSectionGrid
      topContent={
        <UsabilityTestHeader
          title={title}
          descriptions={descriptions}
        />
      }
      mainContent={<UsabilityTestMainContent images={images} />}
    />
  )
}

PingoUsabilityTest.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  )
}

export default PingoUsabilityTest
