import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'
import ContentContainer from '@/layouts/ContentContainer'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import CheckIcon from '@/assets/icons/check.svg'

const DesignImgContent = ({ infos }) => {
  return (
    <div>
      {infos.map(({ id, heading, subheading, hasBgColor, images }, index) => {
        const isFirst = index === 0
        const isLast = index === infos.length - 1
        const noPaddingButton = index === 2 || index === 3

        return (
          <ContentContainer
            key={id}
            className={hasBgColor ? 'bg-gray-01' : ''}
          >
            <section
              className={`${isFirst ? '' : 'pt-[104px]'} ${noPaddingButton ? '' : 'pb-[104px]'} ${isLast ? 'with-divider' : ''} flex flex-col gap-10`}
            >
              <div className='flex flex-col items-center gap-2'>
                {heading && (
                  <>
                    <img src={CheckIcon} />
                    <h4
                      className='text-xl'
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(heading) }}
                    ></h4>
                  </>
                )}
                <p className='text-xl'>{subheading}</p>
              </div>
              <div>
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
            </section>
          </ContentContainer>
        )
      })}
    </div>
  )
}

DesignImgContent.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
      hasBgColor: PropTypes.bool,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          alt: PropTypes.string,
          placeholder: PropTypes.string,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired
        })
      )
    })
  )
}

const PingoUiDesign = ({ title, informations }) => {
  return (
    <>
      <ContentContainer className='bg-gray-01'>
        <div className='pt-[104px]'>
          <h3 className='heading-2'>{title}</h3>
        </div>
      </ContentContainer>
      <DesignImgContent infos={informations} />
    </>
  )
}

PingoUiDesign.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
      hasBgColor: PropTypes.bool,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          alt: PropTypes.string,
          placeholder: PropTypes.string,
          width: PropTypes.number.isRequired,
          height: PropTypes.number.isRequired
        })
      )
    })
  ).isRequired
}

export default PingoUiDesign
