import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import KolChallenge from '@/components/kol/KolChallenge'
import KolAnalysis from '@/components/kol/KolAnalysis'
import KolInsight from '@/components/kol/KolInsight'
import KolUiDesign from '@/components/kol/KolUiDesign'

import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import InterviewCard from '@/components/ui/card/InterviewCard'
import SitemapIndicator from '@/components/SitemapIndicator'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import TextWithIcon from '@/components/ui/text/TextWithIcon'

const KolProjectPage = props => (
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

    <KolChallenge {...props.challenge} />

    {/* 專案流程 / Project Process */}
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={props.process.title}
          descriptions={props.process.descriptions}
        />
      }
      mainContent={
        <>
          {props.process.images.map(img => (
            <BlurLazyImage
              key={img.id}
              {...img}
            />
          ))}
        </>
      }
    />

    <KolAnalysis {...props.analysis} />

    {/* 用戶訪談 / User Interview */}
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={props.interview.title}
          descriptions={props.interview.descriptions}
        />
      }
      mainContent={
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[5.7%]'>
          {props.interview.interviewList.map(interview => (
            <InterviewCard
              key={interview.id}
              interview={interview}
            />
          ))}
        </ul>
      }
    />

    {/* 設計洞察 / Insight */}
    <KolInsight {...props.insight} />

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
        <div className='w-full lg:w-[70.5%] mx-auto'>
          {props.sitemap.images.map(img => (
            <BlurLazyImage
              key={img.id}
              {...img}
            />
          ))}
        </div>
      }
    />

    {/* 線框稿件 / WireFrame */}
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={props.wireframe.title}
          descriptions={props.wireframe.descriptions}
        />
      }
      mainContent={
        <div className='bg-gray-01 rounded-lg'>
          <div className='w-[95%] lg:w-[50%] mx-auto py-16'>
            {props.wireframe.images.map(img => (
              <BlurLazyImage
                key={img.id}
                {...img}
              />
            ))}
          </div>
        </div>
      }
    />

    {/* 設計規範 / Design Guideline */}
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={props.guideline.title}
          descriptions={props.guideline.descriptions}
        />
      }
      mainContent={
        <div className='flex flex-col gap-16'>
          {props.guideline.information.map(guide => (
            <div
              key={guide.id}
              className='flex flex-wrap gap-6'
            >
              {guide.content.map(typeContent => (
                <div
                  key={typeContent.id}
                  className='flex-1 flex flex-col justify-end gap-6 min-w-[300px]'
                >
                  <div className='text-h3 font-h3 text-gray-04'>{typeContent.label}</div>
                  <div>
                    <BlurLazyImage
                      key={typeContent.image.id}
                      {...typeContent.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    />

    {/* 成果展示 / UI Design */}
    <KolUiDesign {...props.uiDesign} />

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
                iconColor='#FF7B8E'
              />
            ))}
          </ul>
        </ContentHeader>
      }
      hasDivider={false}
    />
  </>
)

KolProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  challenge: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
  analysis: PropTypes.object.isRequired,
  interview: PropTypes.object.isRequired,
  insight: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired,
  wireframe: PropTypes.object.isRequired,
  guideline: PropTypes.object.isRequired,
  uiDesign: PropTypes.object.isRequired,
  reflection: PropTypes.object.isRequired
}

export default KolProjectPage
