import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentContainer from '@/layouts/ContentContainer'
import ContentHeader from '@/components/molecules/ContentHeader'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import CustomSwiper from '@/components/CustomSwiper'

const DesignImgContent = ({ infos }) => {
  return (
    <div>
      {infos.map(
        (
          {
            id,
            field,
            heading,
            subheading,
            hasBgColor,
            hasSwiper,
            associateWithNext,
            associateWithPrev,
            images
          },
          index
        ) => {
          const isFirst = index === 0
          const isLast = index === infos.length - 1
          const stylePaddingTop = isFirst || associateWithPrev ? '' : 'pt-[72px]'
          const stylePaddingBottom = associateWithNext ? 'pb-[24px]' : 'pb-[72px]'
          const styleDividerClass = isLast ? 'with-divider' : ''

          return (
            <ContentContainer
              key={id}
              className={hasBgColor ? 'bg-gray-01' : ''}
            >
              <section
                className={`${stylePaddingTop} ${stylePaddingBottom} ${styleDividerClass} flex flex-col gap-10`}
              >
                <div className='flex flex-col items-center gap-1'>
                  <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(field) }}></span>
                  <h4 className='text-h1 font-h1 mb-1'>{heading}</h4>
                  <p className='text-h2 font-h2'>{subheading}</p>
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

                {hasSwiper && <CustomSwiper images={images} />}
              </section>
            </ContentContainer>
          )
        }
      )}
    </div>
  )
}

DesignImgContent.propTypes = {
  infos: PropTypes.object
}

const KolUiDesign = ({ title, descriptions, information }) => {
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
      />
      <DesignImgContent infos={information} />
    </>
  )
}

KolUiDesign.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired,
  information: PropTypes.object
}

export default KolUiDesign
