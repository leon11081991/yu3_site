import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectSitemap from '@/components/ProjectSitemap'
import PingoBgResearch from '@/components/pingo/PingoBgResearch'
import PingoUserResearch from '@/components/pingo/PingoUserResearch'
import PingoInsights from '@/components/pingo/PingoInsights'
import PingoPainPoint from '@/components/pingo/PingoPainPoint'
import PingoFlowChart from '@/components/pingo/PingoFlowChart'
import PingoUsabilityTest from '@/components/pingo/PingoUsabilityTest'
import PingoFeedback from '@/components/pingo/PingoFeedback'
import PingoGuideline from '@/components/pingo/PingoGuideline'
import PingoUiDesign from '@/components/pingo/PingoUiDesign'
import PingoReflection from '@/components/pingo/PingoReflection'

const PingoProjectPage = props => {
  return (
    <>
      <ProjectInfo {...props.info} />
      <ProjectAbout {...props.about} />
      <PingoBgResearch {...props.backgroundResearch} />
      <PingoUserResearch {...props.userResearch} />
      <PingoInsights {...props.insights} />
      <PingoPainPoint {...props.painPoints} />
      <ProjectSitemap {...props.sitemap} />
      <PingoFlowChart {...props.flowChart} />
      <PingoUsabilityTest {...props.usability} />
      <PingoFeedback {...props.feedback} />
      <PingoGuideline {...props.guideline} />
      <PingoUiDesign {...props.uiDesign} />
      <PingoReflection {...props.reflection} />
    </>
  )
}

PingoProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  backgroundResearch: PropTypes.object.isRequired,
  userResearch: PropTypes.object.isRequired,
  insights: PropTypes.object.isRequired,
  painPoints: PropTypes.object.isRequired,
  flowChart: PropTypes.object.isRequired,
  usability: PropTypes.object.isRequired,
  feedback: PropTypes.object.isRequired,
  guideline: PropTypes.object.isRequired,
  uiDesign: PropTypes.object.isRequired,
  reflection: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired
}

export default PingoProjectPage
