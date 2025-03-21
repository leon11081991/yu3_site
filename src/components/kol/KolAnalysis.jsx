import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const AnalysisContent = ({ img, analysisList, conclusion }) => {
  return (
    <div className='flex flex-col gap-4'>
      <BlurLazyImage
        src={img.src}
        alt={`${img.alt} Banner`}
        placeholder={img.placeholder}
        width={img.width}
        height={img.height}
      />
      <ul className='grid grid-cols-3 items-center gap-4'>
        {analysisList.map(item => (
          <AnalysisItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
      {conclusion.map(conc => (
        <AnalysisConclusion
          key={conc.id}
          conclusion={conc}
        />
      ))}
    </div>
  )
}

AnalysisContent.propTypes = {
  img: PropTypes.object,
  analysisList: PropTypes.array,
  conclusion: PropTypes.object
}

const AnalysisItem = ({ item }) => {
  return (
    <li className='flex flex-col gap-8 bg-gray-01 rounded-lg px-8 py-10 h-full'>
      <div className='relative flex-1 flex flex-col items-center gap-4 before:absolute before:bottom-[-16px] before:w-full before:h-[1px] before:bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_50%,_transparent_50%)] before:bg-[length:18px_2px] before:bg-repeat-x'>
        <div className='w-[50px] h-[50px]'>
          <img
            src={item.companyLogo}
            alt={item.companyName}
          />
        </div>
        <div className='text-h3 text-center'>{item.companyName}</div>
        <div className='text-p-1 text-center'>{item.content}</div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <h5 className='text-p-1 text-gray-03'>優勢</h5>
          <p className='text-p-1'>{item.pros}</p>
        </div>
        <div>
          <h5 className='text-p-1 text-gray-03'>劣勢</h5>
          <p className='text-p-1'>{item.cons}</p>
        </div>
      </div>
    </li>
  )
}

AnalysisItem.propTypes = {
  item: PropTypes.object
}

const AnalysisConclusion = ({ conclusion }) => {
  return (
    <div className='flex flex-col items-center gap-4 py-6 px-[7.8%] text-center rounded-lg border border-secondary-04'>
      <div>
        <h5 className='text-h3'>關鍵洞察</h5>
      </div>
      <p className='text-p-1'>{conclusion.content}</p>
    </div>
  )
}

AnalysisConclusion.propTypes = {
  conclusion: PropTypes.object
}

const KolAnalysis = ({ title, descriptions, analysisChart, analysisList, conclusion }) => {
  return (
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={title}
          descriptions={descriptions}
        />
      }
      mainContent={
        <AnalysisContent
          img={analysisChart.image}
          analysisList={analysisList}
          conclusion={conclusion}
        />
      }
    />
  )
}

KolAnalysis.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array,
  analysisChart: PropTypes.object,
  analysisList: PropTypes.array,
  conclusion: PropTypes.object
}

export default KolAnalysis
