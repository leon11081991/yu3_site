import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

const ProjectInfoContent = ({ title, information }) => (
  <section className='section-content border-b-[1px] border-gray-03'>
    <h2 className='project-title heading-1'>{title}</h2>
    <ul className='two-cols-container'>
      {information.map(item => (
        <TextWithTitle
          key={item.label}
          label={item.label}
          content={item.content}
        />
      ))}
    </ul>
  </section>
)

const ProjectInfo = ({ title, information }) => (
  <ContentContainer>
    <ProjectInfoContent
      title={title}
      information={information}
    />
  </ContentContainer>
)

const projectInfoPropTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}
const projectInfoContentPropTypes = projectInfoPropTypes

ProjectInfo.propTypes = projectInfoPropTypes
ProjectInfoContent.propTypes = projectInfoContentPropTypes

export default ProjectInfo
