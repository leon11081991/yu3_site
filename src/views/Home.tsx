import { useState } from 'react'
import ContentContainer from '@/layouts/ContentContainer'
import ProjectCard from '@/components/ui/card/ProjectCard'
import TabFilter from '@/components/ui/TabFilter'
import HeroSection from '@/features/home/HeroSection'
import { useScrollToSectionContext } from '@/shared/contexts/ScrollToSectionContext'
import { PROJECT_BRIEF_LIST } from '@/data/project-brief-data'

const TypeFilter = [
  { type: 'all', label: '全部' },
  { type: 'product', label: '產品' },
  { type: 'app', label: 'APP' },
  { type: 'web', label: '網頁' }
]

const Home = () => {
  const [activeTab, setActiveTab] = useState('all')
  const { registerSection } = useScrollToSectionContext()

  const filteredProjects =
    activeTab === 'all'
      ? PROJECT_BRIEF_LIST // 顯示全部
      : PROJECT_BRIEF_LIST.filter(project => project.type === activeTab)

  return (
    <>
      <HeroSection />
      <ContentContainer>
        <section
          ref={el => registerSection('project-list', el as HTMLElement)}
          className='section-container'
        >
          <TabFilter
            tabs={TypeFilter}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-14'>
            {filteredProjects.map(project => (
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

export default Home
