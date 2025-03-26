import React from 'react'
import DOMPurify from 'dompurify'
import ContentContainer from '@/layouts/ContentContainer'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import Button from '@/components/ui/Button'
import { useNavigation } from '@/shared/hooks/useNavigation'

const ABOUT_CONTENT = {
  title: '關於我 / About',
  introductions: [
    {
      id: 'about-intro-1',
      content:
        '哈囉，我是 Lillian（林郁珊）一名從平面設計跨足 UI/UX 的設計師。自 2020 年首次參與 0 到 1 的產品開發，便對 UI/UX 設計產生濃厚興趣，也因此決定投入這個領域。這些年來，我累積了 4 年設計實務經驗，曾在 Agency 和 In-house 團隊工作，經歷不同產業與專案，讓我對設計的本質與價值有了更深刻的體悟。'
    },
    {
      id: 'about-intro-2',
      content:
        '我始終相信，<span class="text-primary-02 font-normal">唯有持續學習、勇於跳脫舒適圈，才能不斷成長</span>，讓自己變得更加精實。在 AI 崛起、設計工具與工作模式快速變化的時代，我期許自己能始終保持熱忱，並打造出令人愉悅、兼具美學，同時能真正解決問題的產品。'
    }
  ]
}

const About: React.FC = () => {
  const { navigateByStep } = useNavigation()

  return (
    <>
      <Button
        className='btn-go-back fixed top-30'
        hasIcon={true}
        onClick={() => navigateByStep(-1)}
      >
        <span className='text-btn'>返回</span>
      </Button>

      <ContentContainer className='py-10 lg:pb-10 lg:pt-0 min-h-[calc(100dvh-(var(--header-height)+var(--footer-height)))]'>
        <div className='relative w-full mb-10 lg:mb-16 h-[170px] md:h-[240px]'>
          <div className='absolute top-0 left-[2%] md:left-[30.3%] md:translate-x-[-50%] text-[65px] md:text-[100px] text-[#D9D9D9] font-semibold tracking-h1 opacity-5 w-fit'>
            ABOUT
          </div>
          <div className='absolute bottom-0 right-[2%] md:left-[31%] max-w-[194px] md:max-w-[249px] w-full rounded-[4px] overflow-hidden'>
            <BlurLazyImage
              src='/images/hero-image.avif'
              alt='Hero Image'
              width={249}
              height={140}
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col lg:flex-row gap-6 md:gap-none'>
            <h2 className='flex-[30%] text-h2 font-h2'>{ABOUT_CONTENT.title}</h2>

            <div className='flex-[70%] flex flex-col gap-10'>
              {ABOUT_CONTENT.introductions.map(item => (
                <p
                  key={item.id}
                  className='text-p1 font-p1 text-gray-04'
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }}
                ></p>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  )
}

export default About
