import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const InsightContent = ({ img }) => {
  return (
    <div className='w-full mx-auto'>
      <BlurLazyImage
        src={img.src}
        alt={`${img.alt} Banner`}
        placeholder={img.placeholder}
        width={img.width}
        height={img.height}
      />
    </div>
  )
}

InsightContent.propTypes = {
  img: PropTypes.object
}

const KolInsight = ({ title, descriptions, image }) => {
  return (
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={title}
          descriptions={descriptions}
        />
      }
      mainContent={<InsightContent img={image} />}
    />
  )
}

KolInsight.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array,
  image: PropTypes.object
}

export default KolInsight
