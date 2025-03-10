import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

const DescriptionBlock = ({ infos }) => {
  return (
    <div className='flex flex-col gap-8'>
      {infos.map(item => (
        <TextWithTitle
          key={item.label}
          label={item.label}
          content={item.content}
        />
      ))}
    </div>
  )
}

DescriptionBlock.propTypes = {
  infos: PropTypes.array.isRequired
}

const AboutHeader = ({ title, infos }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      <DescriptionBlock infos={infos} />
    </>
  )
}

AboutHeader.propTypes = {
  title: PropTypes.string.isRequired,
  infos: PropTypes.array.isRequired
}

const ProjectAbout = ({ title, information, ...props }) => {
  return (
    <BaseSectionGrid
      topContent={
        <AboutHeader
          title={title}
          infos={information}
        />
      }
      hasDivider={props.hasDivider}
      noPb={props.noPb}
    />
  )
}

ProjectAbout.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.array.isRequired,
  hasDivider: PropTypes.bool,
  noPb: PropTypes.bool
}

export default ProjectAbout
