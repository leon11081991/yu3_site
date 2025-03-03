import ContentContainer from '@/layouts/ContentContainer'
import ProjectCard from '@/components/ui/card/ProjectCard'

import { PROJECT_BRIEF_LIST } from '@/data/project-brief-data'

const Home = () => {
  return (
    <ContentContainer>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {PROJECT_BRIEF_LIST.map(project => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </ul>
    </ContentContainer>
  )
}

export default Home
