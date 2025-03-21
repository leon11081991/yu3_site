import PropTypes from 'prop-types'

import ProjectInfo from '@/components/ProjectInfo'
import MandalaProcessChart from '@/components/mandala/MandalaProcessChart'
import ProjectDemoVideo from '@/components/ProjectDemoVideo'
import ProjectPureImagesDemo from '@/components/ProjectPureImagesDemo'

import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import SitemapIndicator from '@/components/SitemapIndicator'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const MandalaProjectPage = props => (
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
      mainContent={<MandalaProcessChart {...props.process} />}
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
        <div>
          <div className='w-full lg:w-[40.5%] mx-auto'>
            {props.sitemap.images.map(img => (
              <BlurLazyImage
                key={img.id}
                {...img}
              />
            ))}
          </div>
        </div>
      }
      hasDivider={false}
    />

    <ProjectDemoVideo {...props.demoVideo} />
    <ProjectPureImagesDemo {...props.demonstrations} />
  </>
)

MandalaProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired,
  demoVideo: PropTypes.object.isRequired,
  demonstrations: PropTypes.object.isRequired
}

export default MandalaProjectPage
