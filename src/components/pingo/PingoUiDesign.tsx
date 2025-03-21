import DOMPurify from 'dompurify'
import ContentContainer from '@/layouts/ContentContainer'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import SvgIcon from '@/components/ui/SvgIcon'
import { Image } from '@/models/data.interface'

interface DesignImgContentProps {
  infos: {
    id: string
    heading: string | null
    subheading: string
    hasBgColor: boolean
    images: Image[]
  }[]
}

interface PingoUiDesignProps {
  title: string
  information: DesignImgContentProps['infos']
}

const DesignImgContent = ({ infos }: DesignImgContentProps) => {
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
              className={`${isFirst ? '' : 'pt-[var(--section-padding-y--mobile)] md:pt-[var(--section-padding-y)]'} ${noPaddingButton ? '' : 'pb-[var(--section-padding-y--mobile)] md:pb-[var(--section-padding-y)]'} ${isLast ? 'with-divider' : ''} flex flex-col gap-10`}
            >
              <div className='flex flex-col items-center gap-2'>
                {heading && (
                  <>
                    <SvgIcon
                      iconName='check'
                      svgProps={{ color: '#FFA92D' }}
                    />
                    <h4
                      className='text-xl'
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(heading) }}
                    ></h4>
                  </>
                )}
                <p className='text-xl'>{subheading}</p>
              </div>
              <div>
                {images.map(img => {
                  const widthPercent = `${(img.width / 1122) * 100}%`

                  return (
                    <div
                      key={img.id}
                      className='mx-auto'
                      style={{ width: widthPercent }}
                    >
                      <BlurLazyImage
                        src={img.src}
                        alt={img.alt}
                        placeholder={img.placeholder}
                        width={img.width}
                        height={img.height}
                      />
                    </div>
                  )
                })}
              </div>
            </section>
          </ContentContainer>
        )
      })}
    </div>
  )
}

const PingoUiDesign = ({ title, information }: PingoUiDesignProps) => {
  return (
    <>
      <ContentContainer className='bg-gray-01'>
        <div className='pt-[var(--section-padding-y--mobile)] md:pt-[var(--section-padding-y)]'>
          <h3 className='heading-2'>{title}</h3>
        </div>
      </ContentContainer>
      <DesignImgContent infos={information} />
    </>
  )
}

export default PingoUiDesign
