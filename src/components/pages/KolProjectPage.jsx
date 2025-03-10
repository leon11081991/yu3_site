import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import KolChallenge from '@/components/kol/KolChallenge'
import ProjectProcess from '@/components/ProjectProcess'
import ProjectSitemap from '@/components/ProjectSitemap'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const KolProjectPage = props => (
  <>
    <ProjectInfo {...props.info} />
    <ProjectAbout {...{ ...props.about, hasDivider: false, noPb: true }} />
    <KolChallenge {...props.challenge} />
    <ProjectProcess {...props.process}>
      <BlurLazyImage {...props.process.image} />
    </ProjectProcess>
    <ProjectSitemap {...props.sitemap} />
  </>
)

KolProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  challenge: PropTypes.object.isRequired,
  process: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired,
  sitemap: PropTypes.object.isRequired
}

export default KolProjectPage
