import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import ResearchBarChartList from '@/features/projects/pingo/ResearchBarChartList'
import PingoFlowChart from '@/components/pingo/PingoFlowChart'
import PingoGuideline from '@/components/pingo/PingoGuideline'
import PingoUiDesign from '@/components/pingo/PingoUiDesign'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import SitemapIndicator from '@/components/SitemapIndicator'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import TextWithIcon from '@/components/ui/text/TextWithIcon'
import UserCard from '@/components/ui/card/UserCard'
import PainPointMainContent from '@/components/pingo/PainPoint'

const PingoProjectPage = props => {
  return (
    <>
      <ProjectInfo {...props.info} />

      {/* 關於專案 / About Project */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.about.title}
            descriptions={props.about.descriptions}
          />
        }
      />

      {/* 背景研究 / Background Research */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.backgroundResearch.title}
            descriptions={props.backgroundResearch.descriptions}
          >
            <div className='flex flex-col gap-16'>
              <ResearchBarChartList sources={props.backgroundResearch.dataSources} />
              <ul className='flex flex-col gap-8'>
                {props.backgroundResearch.information.map(item => (
                  <TextWithTitle
                    key={item.label}
                    label={item.label}
                    content={item.content}
                  />
                ))}
              </ul>
            </div>
          </ContentHeader>
        }
      />

      {/* 使用者研究 / User Research */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.userResearch.title}
            descriptions={props.userResearch.descriptions}
          />
        }
        mainContent={
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr'>
            {props.userResearch.researches.map(research => (
              <UserCard
                key={research.id}
                {...research}
              />
            ))}
          </div>
        }
      />

      {/* 設計洞察 / insights */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.insights.title}
            descriptions={props.insights.descriptions}
          />
        }
        mainContent={
          <div className='w-full lg:w-[88.5%] mx-auto'>
            {props.insights.images.map(img => (
              <BlurLazyImage
                key={img.id}
                src={img.src}
                alt={img.alt}
                placeholder={img.placeholder}
                width={img.width}
                height={img.height}
              />
            ))}
          </div>
        }
      />

      {/* 痛點分析＆解決方案 / Painpoint & Solution */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.painPoints.title}
            descriptions={props.painPoints.descriptions}
          />
        }
        mainContent={<PainPointMainContent infos={props.painPoints.information} />}
      />

      {/* 網站架構 / Sitemap */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.sitemap.title}
            descriptions={props.sitemap.descriptions}
            className='gap-4'
          >
            <SitemapIndicator indicators={props.sitemap.indicators} />
          </ContentHeader>
        }
        mainContent={
          <div className='w-full lg:w-[44.2%] mx-auto'>
            {props.sitemap.images.map(img => (
              <BlurLazyImage
                key={img.id}
                {...img}
              />
            ))}
          </div>
        }
      />

      {/* 流程優化 / Flow Chart */}
      <PingoFlowChart {...props.flowChart} />

      {/* 易用性測試 / Usability Test */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.usability.title}
            descriptions={props.usability.descriptions}
          />
        }
        mainContent={
          <div className='bg-gray-01 py-9'>
            <div className='w-full md:w-[95.2%] mx-auto'>
              {props.usability.images.map(img => (
                <BlurLazyImage
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  placeholder={img.placeholder}
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>
          </div>
        }
      />

      {/* 使用反饋 /  Feedback */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.feedback.title}
            descriptions={props.feedback.descriptions}
          />
        }
        mainContent={
          <div className='w-[77%] mx-auto'>
            {props.feedback.images.map(img => (
              <BlurLazyImage
                key={img.id}
                src={img.src}
                alt={img.alt}
                placeholder={img.placeholder}
                width={img.width}
                height={img.height}
              />
            ))}
          </div>
        }
        hasDivider={false}
        noPb={true}
      />

      <PingoGuideline {...props.guideline} />
      <PingoUiDesign {...props.uiDesign} />

      {/* 學習&反思 / Reflection */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.reflection.title}
            descriptions={props.reflection.descriptions}
          >
            <ul className='flex flex-col gap-3'>
              {props.reflection.reflectionList.map(item => (
                <TextWithIcon
                  key={item.id}
                  item={item}
                  iconColor='#FFA92D'
                />
              ))}
            </ul>
          </ContentHeader>
        }
      />
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
