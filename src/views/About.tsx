import React from 'react'
import ContentContainer from '@/layouts/ContentContainer'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const About: React.FC = () => {
  return (
    <>
      <ContentContainer className='py-10 min-h-[calc(100dvh-(var(--header-height)+var(--footer-height)))]'>
        <div className='relative w-full mb-16'>
          <div className='text-[100px] text-[#D9D9D9] font-semibold tracking-h1 opacity-5 ml-0 md:ml-[15%] w-fit'>
            ABOUT
          </div>
          <div className='max-w-[300px] w-full ml-auto mr-0 md:ml-[calc(30%+24px)] md:mr-auto -mt-[55px]'>
            <BlurLazyImage
              src='/images/about/hero-image.avif'
              alt='Hero Image'
              width={300}
              height={169}
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-6 md:gap-none'>
            <h2 className='flex-[30%] text-h2 font-h2'>關於我 / About</h2>

            <div className='flex-[70%] flex flex-col gap-10'>
              <p className='text-p1 font-p1'>
                哈囉，我是 Lillian（林郁珊），一名從平面設計跨足 UI/UX 的設計師。自 2020 年首次參與
                0 到 1 的產品開發，便對 UI/UX
                設計產生濃厚興趣，也因此決定投入這個領域。這些年來，我累積了 4 年設計實務經驗，曾在
                Agency 和 In-house
                團隊工作，經歷不同產業與專案，讓我對設計的本質與價值有了更深刻的體悟。
              </p>
              <p className='text-p1 font-p1'>
                我始終相信，
                <span className='font-normal'>唯有持續學習、勇於跳脫舒適圈，才能不斷成長</span>
                ，讓自己變得更加精實。在 AI
                崛起、設計工具與工作模式快速變化的時代，我期許自己能始終保持熱忱，並打造出令人愉悅、兼具美學，同時能真正解決問題的產品。
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  )
}

export default About
