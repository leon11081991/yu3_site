import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import ProjectDemoVideo from '@/components/ProjectDemoVideo'
import KaiDemo from '@/components/kai/KaiDemo'

import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import SitemapIndicator from '@/components/SitemapIndicator'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const KaiProjectPage = props => (
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
      hasDivider={false}
      noPb={true}
    />
    {/* 專案流程 / Project Process */}
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={props.process.title}
          descriptions={props.process.descriptions}
        />
      }
      mainContent={
        <div className='w-full'>
          {props.process.images.map(img => (
            <BlurLazyImage
              key={img.id}
              {...img}
            />
          ))}
        </div>
      }
    />
    {/* 網站架構 / Sitemap */}
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={props.sitemap.title}
          descriptions={props.sitemap.descriptions}
        >
          <SitemapIndicator indicators={props.sitemap.indicators} />
        </ContentHeader>
      }
      mainContent={
        <div className='w-full lg:w-[60%] mx-auto'>
          {props.sitemap.images.map(img => (
            <BlurLazyImage
              key={img.id}
              {...img}
            />
          ))}
        </div>
      }
      hasDivider={false}
    />

    <ProjectDemoVideo {...props.demoVideo} />
    <KaiDemo {...props.demo} />
  </>
)

KaiProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired,
  demoVideo: PropTypes.object.isRequired,
  demo: PropTypes.object.isRequired
}

export default KaiProjectPage
