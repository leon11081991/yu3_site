import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'
import ContentContainer from '@/layouts/ContentContainer'
import TagList from '@/components/molecules/TagList'

const ProjectInfoContent = ({ title, information }) => (
  <section className='py-[var(--section-padding-y--mobile)] lg:py-[var(--section-padding-y)] border-b-[1px] border-gray-02'>
    <h2 className='mb-6 lg:mb-10 text-[20px] tracking-[1px] lg:heading-1 font-h1'>{title}</h2>
    <ul className='two-cols-container'>
      {information.map(item => (
        <li
          key={item.id}
          className='flex flex-col gap-2'
        >
          <h3 className='heading-3 text-gray-03'>{item.label}</h3>
          {item.isTagType ? (
            <TagList tagList={item.content} />
          ) : (
            <p
              className='text-h4 font-h4'
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }}
            ></p>
          )}
        </li>
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
