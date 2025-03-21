import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const ImageDemonstrationPure = ({ image }) => {
  return (
    <ContentContainer className={image.other.bgColorStyle}>
      <div className={`mt-36 mb-36 mx-auto ${image.other.widthStyle}`}>
        <BlurLazyImage
          src={image.src}
          alt={image.alt}
          placeholder={image.placeholder}
          width={image.width}
          height={image.height}
        />
      </div>
    </ContentContainer>
  )
}

ImageDemonstrationPure.propTypes = {
  image: PropTypes.object.isRequired
}

export default ImageDemonstrationPure
