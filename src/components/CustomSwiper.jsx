import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import SvgIcon from '@/components/ui/SvgIcon'

const CustomSwiper = ({ images }) => {
  const currentIndexRef = useRef(0)
  const [, forceUpdate] = useState(0)

  const prevSlide = () => {
    currentIndexRef.current =
      currentIndexRef.current === 0 ? images.length - 1 : currentIndexRef.current - 1
    forceUpdate(prev => prev - 1)
  }

  const nextSlide = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % images.length
    forceUpdate(prev => prev + 1)
  }

  const goToSlide = index => {
    console.log('goToSlide', index)
    currentIndexRef.current = index
    forceUpdate(prev => prev + 1)
  }

  const currentImage = images[currentIndexRef.current] || {}

  return (
    // Swiper容器
    <div className='w-full max-w-3xl mx-auto'>
      <div className='relative'>
        {/* 往前一張按鈕 */}
        <div
          onClick={prevSlide}
          className='absolute left-0 top-1/2 -translate-y-1/2 rotate-180 w-[40px] h-[40px] flex items-center justify-center rounded-full transition cursor-pointer hover:bg-gray-02'
        >
          <SvgIcon iconName='arrowRight' />
        </div>

        {/* 展示畫面 */}
        <img
          loading='lazy'
          src={currentImage.src}
          alt={`Slide ${currentImage + 1}`}
          className='w-[88%] mx-auto h-auto rounded-lg shadow-lg transition-all duration-500'
        />

        {/* 往下一張按鈕 */}
        <div
          onClick={nextSlide}
          className='absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full transition cursor-pointer hover:bg-gray-02'
        >
          <SvgIcon iconName='arrowRight' />
        </div>
      </div>

      <div className='flex justify-center gap-2 mt-4'>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative w-[60px] h-[60px] cursor-pointer overflow-hidden after:absolute after:content-[""] after:w-[60px] after:h-[60px] after:left-0 after:top-0 ${
              index === currentIndexRef.current ? '' : 'after:bg-primary-01 after:opacity-40'
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`h-full object-cover scale-105 `}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

CustomSwiper.propTypes = {
  images: PropTypes.array
}

export default CustomSwiper
