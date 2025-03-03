import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

const ProjectAboutContent = ({ title, information }) => (
  <section className='section-content two-cols-container border-b-[1px] border-gray-03'>
    <h3 className='heading-2'>{title}</h3>
    <ul className='flex flex-col gap-16'>
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

const ProjectAbout = ({ title, information }) => (
  <ContentContainer>
    <ProjectAboutContent
      title={title}
      information={information}
    />
  </ContentContainer>
)

const projectAboutPropTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}
const projectAboutContentPropTypes = projectAboutPropTypes

ProjectAbout.propTypes = projectAboutPropTypes
ProjectAboutContent.propTypes = projectAboutContentPropTypes

export default ProjectAbout
