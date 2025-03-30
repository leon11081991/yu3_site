import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentContainer from '@/layouts/ContentContainer'
import ContentHeader from '@/components/molecules/ContentHeader'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import { ImageSlider } from '@/components/ImageSlider'

const DesignContent = ({ field, heading, subheading, hasSwiper, images, className }) => {
  return (
    <section className={`flex flex-col gap-6 lg:gap-10 ${className}`}>
      <div className='flex flex-col items-center gap-1'>
        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(field) }}></span>
        <h4 className='text-h3 font-h3 lg:text-h1 lg:font-h1 mb-1'>{heading}</h4>
        <p className='text-h3 font-h3 lg:text-h2 lg:font-h2 text-gray-04'>{subheading}</p>
      </div>
      {!hasSwiper && (
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
      )}

      {hasSwiper && <ImageSlider images={images} />}
    </section>
  )
}

const DesignImgContent = ({ infos, firstContent, lastContent }) => {
  return (
    <div>
      {infos.map(({ id, hasBgColor, content }) => {
        return (
          <ContentContainer
            key={id}
            className={hasBgColor ? 'bg-gray-01' : ''}
          >
            {content.map(
              ({ id, field, heading, subheading, hasSwiper, images, associateWithPrev }, index) => {
                const isLast = index === content.length - 1
                const isFirstContent = firstContent?.id === id
                const isLastContent = lastContent?.id === id

                return (
                  <DesignContent
                    key={id}
                    field={field}
                    heading={heading}
                    subheading={subheading}
                    hasSwiper={hasSwiper}
                    images={images}
                    className={`${isLast ? 'py-10 lg:py-[144px]' : 'pt-10 lg:pt-[144px]'} ${associateWithPrev ? 'pt-6 lg:pt-10' : ''} ${isFirstContent ? 'bg-red' : ''} ${isLastContent ? 'with-divider' : ''}`}
                  />
                )
              }
            )}
          </ContentContainer>
        )
      })}
    </div>
  )
}

DesignImgContent.propTypes = {
  infos: PropTypes.object
}

const KolUiDesign = ({ title, descriptions, information }) => {
  const firstContent = information[0]?.content[0]
  const lastContent =
    information[information.length - 1]?.content[
      information[information.length - 1]?.content.length - 1
    ]

  return (
    <>
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={title}
            descriptions={descriptions}
          />
        }
        hasDivider={false}
        sectionClassName='pb-0'
      />
      <DesignImgContent
        infos={information}
        firstContent={firstContent}
        lastContent={lastContent}
      />
    </>
  )
}

KolUiDesign.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired,
  information: PropTypes.object
}

export default KolUiDesign
