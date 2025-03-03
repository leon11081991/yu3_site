import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectSitemap from '@/components/ProjectSitemap'
import PingoBgResearch from '@/components/pingo/PingoBgResearch'
import PingoUserResearch from '@/components/pingo/PingoUserResearch'
import PingoInsights from '@/components/pingo/PingoInsights'

const PingoProjectPage = props => {
  return (
    <>
      <ProjectInfo {...props.info} />
      <ProjectAbout {...props.about} />
      <PingoBgResearch {...props.backgroundResearch} />
      <PingoUserResearch {...props.userResearch} />
      {/* 設計洞察 /  insights */}
      <PingoInsights {...props.insights} />
      {/* 痛點分析＆解決方案 / Painpoint & Solution */}
      <ProjectSitemap {...props.sitemap} />
      {/* 流程優化 / Flow Chart */}
      {/* 設計規範 / Design Guideline */}
    </>
  )
}

PingoProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  backgroundResearch: PropTypes.object.isRequired,
  userResearch: PropTypes.object.isRequired,
  insights: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired
}

export default PingoProjectPage
