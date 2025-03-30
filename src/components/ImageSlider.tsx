import { useState } from 'react'
import SvgIcon from '@/components/ui/SvgIcon'

interface Image {
  src: string
  alt: string
  width: number
  height: number
}

interface ImageSliderProps {
  images: Image[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPrevSlide() {
    setImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  function showNextSlide() {
    setImageIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const onImageClick = (index: number) => {
    setImageIndex(index)
  }

  return (
    // Swiper容器
    <div className='w-full mx-auto'>
      <div className=''>
        {/* 展示畫面 */}
        <div className='w-full h-full'>
          <img
            loading='lazy'
            src={images[imageIndex].src}
            alt={`Slide ${images[imageIndex].alt}`}
            className={`w-full mx-auto h-auto rounded-lg shadow-lg`}
          />
        </div>
      </div>

      <div className='relative flex justify-center gap-20 mt-6 lg:mt-10'>
        {/* 往前一張按鈕 */}
        <div
          onClick={showPrevSlide}
          className={`w-[44px] h-[44px] flex items-center justify-center rounded-full border border-gray-03 transition cursor-pointer hover:bg-gray-02 ${imageIndex === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <SvgIcon iconName='sliderLeft' />
        </div>

        <div className='flex justify-center items-center gap-6'>
          {images.map((image, index) => {
            const isActive = index === imageIndex
            return (
              <div
                key={image.alt}
                className={`w-2 h-2 rounded-full transition hover:scale-125 ${isActive ? 'bg-primary-02' : 'bg-gray-03'}`}
                onClick={() => onImageClick(index)}
              ></div>
            )
          })}
        </div>

        {/* 往下一張按鈕 */}
        <div
          onClick={showNextSlide}
          className={`w-[44px] h-[44px] flex items-center justify-center rounded-full border border-gray-03 transition cursor-pointer hover:bg-gray-02 ${imageIndex === images.length - 1 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <SvgIcon iconName='sliderRight' />
        </div>
      </div>
    </div>
  )
}
