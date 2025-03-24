import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import OptimizationOverview from '@/components/molecules/OptimizationOverview'
import TextWithIcon from '@/components/ui/text/TextWithIcon'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import SvgIcon from '@/components/ui/SvgIcon'

const WacaProjectPage = props => {
  return (
    <>
      <ProjectInfo {...props.info} />

      {/* 關於專案 / About Project */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.about.title}
            descriptions={props.about.descriptions}
          >
            <div className='flex bg-gray-01 rounded-lg px-6 py-2'>
              <div>
                <SvgIcon
                  iconName='info'
                  size={{ width: '28px', height: '28px' }}
                />
              </div>
              <p className='text-p1 font-p1 text-gray-04'>{props.about.notice}</p>
            </div>
          </ContentHeader>
        }
      />

      {/* 設計挑戰 / Challenge */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.challenge.title}
            descriptions={props.challenge.descriptions}
          >
            <ul className='flex flex-col gap-4'>
              {props.challenge.pointList.map((item, index) => (
                <TextWithIcon
                  key={item.id}
                  index={index}
                  iconType='index'
                  item={item}
                  iconColor='#F29D21'
                />
              ))}
            </ul>
          </ContentHeader>
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

      {/* 定義問題 / Problem */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.problem.title}
            descriptions={props.problem.descriptions}
          />
        }
        mainContent={
          <ul className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 lg:gap-4'>
            {props.problem.information.map(info => (
              <li
                key={info.id}
                className='flex flex-col gap-6 lg:gap-8 items-center max-w-[300px] mx-auto'
              >
                <div className='w-[60%] md:w-full max-w-[250px] max-h-[250px] aspect-square rounded-full border-2 border-secondary-03 flex items-center justify-center text-h2 font-h2 text-center'>
                  {info.title}
                </div>
                <p className='text-center text-p1 font-p1'>{info.desc}</p>
              </li>
            ))}
          </ul>
        }
      />

      {/* 設計過程 / Design Process */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            className='lg:gap-6'
            title={props.designProcess.title}
            descriptions={props.designProcess.descriptions}
          >
            <div className='flex gap-10'>
              {props.designProcess.referenceLinks.map(link => (
                <a
                  key={link.id}
                  href={link.link}
                  target='_blank'
                  className='text-p1 font-p1 underline hover:text-gray-04 transition'
                  rel='noreferrer'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </ContentHeader>
        }
        mainContent={
          <div className='flex flex-col gap-8'>
            {props.designProcess.Optimizations.map(optimization => (
              <OptimizationOverview
                key={optimization.id}
                {...optimization}
              />
            ))}
          </div>
        }
        innerClassName='gap-16'
      />

      {/* 遇到的困難 / Issue */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.issue.title}
            descriptions={props.issue.descriptions}
          >
            <>
              {props.issue.images.map(img => (
                <BlurLazyImage
                  key={img.id}
                  {...img}
                />
              ))}
            </>
          </ContentHeader>
        }
      />

      {/* 解決辦法 / Solution */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            className='lg:gap-6'
            title={props.solution.title}
            descriptions={props.solution.descriptions}
          >
            <div className='flex gap-10'>
              {props.solution.referenceLinks.map(link => (
                <a
                  key={link.id}
                  href={link.link}
                  target='_blank'
                  className='text-p1 font-p1 underline hover:text-gray-04 transition'
                  rel='noreferrer'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </ContentHeader>
        }
        mainContent={
          <div className='flex flex-col gap-8'>
            {props.solution.Optimizations.map(optimization => (
              <OptimizationOverview
                key={optimization.id}
                {...optimization}
              />
            ))}
          </div>
        }
        hasDivider={false}
        noPb={true}
        innerClassName='gap-16'
      />

      {/* 設計成果 / Design Results */}
      <BaseSectionGrid
        topContent={
          <ContentHeader
            title={props.designResults.title}
            descriptions={props.designResults.descriptions}
          />
        }
        mainContent={
          <div className='flex flex-col gap-8'>
            {props.designResults.Optimizations.map(optimization => (
              <OptimizationOverview
                key={optimization.id}
                {...optimization}
              />
            ))}
          </div>
        }
      />

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
                  iconColor='#F29D21'
                />
              ))}
            </ul>
          </ContentHeader>
        }
        hasDivider={false}
      />
    </>
  )
}

WacaProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  challenge: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
  problem: PropTypes.object.isRequired,
  designProcess: PropTypes.object.isRequired,
  issue: PropTypes.object.isRequired,
  solution: PropTypes.object.isRequired,
  designResults: PropTypes.object.isRequired,
  reflection: PropTypes.object.isRequired
}

export default WacaProjectPage
