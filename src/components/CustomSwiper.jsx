import PropTypes from 'prop-types'
import { useRef, useReducer } from 'react'
import SvgIcon from '@/components/ui/SvgIcon'

const CustomSwiper = ({ images }) => {
  const currentIndexRef = useRef(0)
  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const prevSlide = () => {
    currentIndexRef.current =
      currentIndexRef.current === 0 ? images.length - 1 : currentIndexRef.current - 1
    forceUpdate()
  }

  const nextSlide = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % images.length
    forceUpdate()
  }

  const goToSlide = index => {
    console.log('goToSlide', index)
    currentIndexRef.current = index
    forceUpdate()
  }

  const currentImage = images[currentIndexRef.current] || {}

  return (
    // Swiper容器
    <div className='w-full mx-auto'>
      <div className='relative'>
        {/* 往前一張按鈕 */}
        <div
          onClick={prevSlide}
          className='absolute -left-3 lg:left-0 top-1/2 -translate-y-1/2 rotate-180 w-[40px] h-[40px] flex items-center justify-center rounded-full transition cursor-pointer hover:bg-gray-02'
        >
          <SvgIcon
            iconName='arrowRight'
            size={{ width: 32, height: 32 }}
          />
        </div>

        {/* 展示畫面 */}
        <img
          loading='lazy'
          src={currentImage.src}
          alt={`Slide ${currentImage + 1}`}
          className='w-full mx-auto h-auto rounded-lg shadow-lg transition-all duration-500'
        />

        {/* 往下一張按鈕 */}
        <div
          onClick={nextSlide}
          className='absolute -right-3 lg:right-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full transition cursor-pointer hover:bg-gray-02'
        >
          <SvgIcon
            iconName='arrowRight'
            size={{ width: 32, height: 32 }}
          />
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
