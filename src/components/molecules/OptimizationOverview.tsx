import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import BaseVideo from '@/components/ui/BaseVideo'
import TextWithIcon from '@/components/ui/text/TextWithIcon'

interface OptimizationOverviewProps {
  isOptimized: boolean
  title: string
  displayType: string
  image: {
    src: string
    alt: string
    placeholder: string
    width: number
    height: number
  }
  contentList?: {
    id: string
    content: string
  }[]
}

const OptimizationOverview = ({
  isOptimized,
  title,
  displayType,
  image,
  contentList
}: OptimizationOverviewProps) => {
  return (
    <div className='flex flex-col items-start gap-6'>
      <div className='py-1 px-3 bg-gray-01 rounded-[4px] flex gap-2.5 items-center'>
        {isOptimized && <span className='block w-1 h-1 rounded-full bg-secondary-03'></span>}
        <h4 className='inline-block text-p1 font-p1'>{title}</h4>
      </div>

      <div className='w-full mx-auto p-6 lg:p-10 bg-gray-01 rounded-[10px]'>
        {displayType === 'image' ? (
          <BlurLazyImage {...image} />
        ) : (
          <div className='flex flex-col lg:flex-row justify-center items-flex-start lg:gap-10'>
            <BaseVideo
              videoSrc={image.src}
              videoLabel={image.alt}
              width={image.width}
              height={image.height}
              className={`lg:max-h-[311px]`}
            />
            <div className='flex flex-col gap-3 p-6'>
              {contentList?.map((item, index) => (
                <TextWithIcon
                  key={item.id}
                  index={index}
                  iconType='index'
                  item={item}
                  iconColor='#237AFC'
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default OptimizationOverview
