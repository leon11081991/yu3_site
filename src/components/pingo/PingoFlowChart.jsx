import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import ContentHeader from '@/components/molecules/ContentHeader'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const FlowChartHeader = ({ title, des, indicator }) => {
  return (
    <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col gap-16'>
        <ContentHeader
          title={title}
          descriptions={des}
        />
      </div>
      <div className='max-w-[482px] mx-auto lg:ml-auto'>
        <BlurLazyImage
          src={indicator.src}
          alt={indicator.alt}
          width={indicator.width}
          height={indicator.height}
        />
      </div>
    </div>
  )
}

FlowChartHeader.propTypes = {
  title: PropTypes.string,
  des: PropTypes.array,
  indicator: PropTypes.object
}

const FlowChartMainContent = ({ infos }) => {
  return infos.map(({ id, heading, images }) => (
    <div
      key={id}
      className='flex flex-col gap-10'
    >
      <h4 className='text-h3'>{heading}</h4>
      <div className='w-[89.1%] mx-auto'>
        {images.map(img => (
          <BlurLazyImage
            key={img.id}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>
    </div>
  ))
}

FlowChartMainContent.propTypes = {
  infos: PropTypes.array
}

const PingoFlowChart = ({ title, descriptions, indicator, information }) => {
  return (
    <ContentContainer>
      <section className='section-container with-divider'>
        <div className='section-container-inner'>
          <FlowChartHeader
            title={title}
            des={descriptions}
            indicator={indicator}
          />
          <FlowChartMainContent infos={information} />
        </div>
      </section>
    </ContentContainer>
  )
}

PingoFlowChart.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array,
  indicator: PropTypes.object,
  information: PropTypes.array
}

export default PingoFlowChart
