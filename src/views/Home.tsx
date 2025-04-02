import ContentContainer from '@/layouts/ContentContainer'
import ProjectCard from '@/components/ui/card/ProjectCard'
import TabFilter from '@/components/ui/TabFilter'
import HeroSection from '@/features/home/HeroSection'
import { useTabFilter } from '@/shared/hooks/useTabFilter'
import { useScrollToSectionContext } from '@/shared/contexts/ScrollToSectionContext'
import { PROJECT_BRIEF_LIST } from '@/data/project-brief-data'

const TypeFilter = [
  { type: 'all', label: '全部' },
  { type: 'product', label: '產品' },
  { type: 'app', label: 'APP' },
  { type: 'web', label: '網頁' }
]

export default function Home() {
  const { activeTab, setActiveTab, filteredData } = useTabFilter({
    defaultTab: 'all',
    data: PROJECT_BRIEF_LIST
  })
  const { registerSection } = useScrollToSectionContext()

  return (
    <>
      <HeroSection />
      <ContentContainer>
        <section
          ref={el => registerSection('project-list', el as HTMLElement)}
          className='pt-[80px] pb-[var(--section-padding-y--mobile)] lg:py-[var(--section-padding-y)]'
        >
          <TabFilter
            tabs={TypeFilter}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-16 gap-x-14'>
            {filteredData.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </ul>
        </section>
      </ContentContainer>
    </>
  )
}
