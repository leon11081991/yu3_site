import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'

const ProjectProcess = ({ title, children }) => {
  return (
    <BaseSectionGrid
      topContent={<ContentHeader title={title} />}
      mainContent={children}
    />
  )
}

ProjectProcess.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ProjectProcess
