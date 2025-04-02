import TagList from '@/components/molecules/TagList'
import SvgIcon from '@/components/ui/SvgIcon'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import { useScrollToSectionContext } from '@/shared/contexts/ScrollToSectionContext'

const designerTag = ['4+ Years of exp', 'UI/UX Design', 'Visual Design']

const HeroSectionFooter = () => {
  const { scrollToSection } = useScrollToSectionContext()
  return (
    <div className='mb-4 flex flex-col md:flex-row items-center justify-between gap-16'>
      <TagList
        type='light'
        className='justify-center'
        tagList={designerTag}
      />

      <div
        className='w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-gray-02'
        onClick={() => scrollToSection('project-list')}
      >
        <div className='animate-bounce'>
          <SvgIcon iconName='arrowDown' />
        </div>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className='mx-[var(--main-content-padding-x--mobile)] lg:mx-[var(--main-content-padding-x)] h-[calc(100dvh-80px)] flex flex-col with-divider'>
      <div className='flex-1 flex flex-col md:flex-row items-center justify-center gap-10'>
        <div className='md:-mt-20 min-w-[222px] w-[22.2%] max-w-[300px]'>
          <BlurLazyImage
            src='/images/hero-image.avif'
            alt='Hero Image'
            width={300}
            height={169}
            placeholder='/images/hero-image.avif'
          />
        </div>

        <div className='md:-mt-20 flex flex-col items-center md:items-start gap-4'>
          <p className='text-[20px] font-normal'>Hello I’m Lillian Lin</p>
          <p className='text-h2 font-h2 text-gray-03'>UI/UX Designer</p>
        </div>
      </div>

      <HeroSectionFooter />
    </section>
  )
}

export default HeroSection
