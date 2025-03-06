import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'

const BaseSectionGrid = ({ topContent, mainContent, hasDivider = true, noPb = false }) => {
  return (
    <ContentContainer>
      <section
        className={`section-container ${hasDivider ? 'with-divider' : ''} ${noPb ? 'pb-0' : ''}`}
      >
        <div className='section-container-inner'>
          {topContent && <BaseSectionTop>{topContent}</BaseSectionTop>}
          {mainContent && <BaseSectionContent>{mainContent}</BaseSectionContent>}
        </div>
      </section>
    </ContentContainer>
  )
}

BaseSectionGrid.propTypes = {
  topContent: PropTypes.node.isRequired,
  mainContent: PropTypes.node,
  hasDivider: PropTypes.bool,
  noPb: PropTypes.bool
}

const BaseSectionTop = ({ children }) => {
  return <div className='section-top-cols-grid'>{children}</div>
}

BaseSectionTop.propTypes = {
  children: PropTypes.node.isRequired
}

const BaseSectionContent = ({ children }) => {
  return <div className='section-main-content'>{children}</div>
}

BaseSectionContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default BaseSectionGrid
