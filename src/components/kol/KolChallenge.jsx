import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

const PointList = ({ pointList }) => {
  return (
    <ul className='flex flex-col gap-8'>
      {pointList.map((item, index) => (
        <li
          key={item.id}
          className='flex items-center gap-2'
        >
          <span className='w-6 h-6 flex items-center justify-center rounded-full bg-secondary-03 text-p2'>
            {index + 1}
          </span>
          <p className='text-p2'>{item.content}</p>
        </li>
      ))}
    </ul>
  )
}

PointList.propTypes = {
  pointList: PropTypes.array
}

const DescriptionBlock = ({ infos, pointList }) => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-8'>
        {infos.map(item => (
          <TextWithTitle
            key={item.label}
            label={item.label}
            content={item.content}
          />
        ))}
      </div>
      <PointList pointList={pointList} />
    </div>
  )
}

DescriptionBlock.propTypes = {
  infos: PropTypes.array,
  pointList: PropTypes.array
}

const ChallengeHeader = ({ title, infos, pointList }) => {
  return (
    <>
      <h3 className='heading-3'>{title}</h3>
      <DescriptionBlock
        infos={infos}
        pointList={pointList}
      />
    </>
  )
}

ChallengeHeader.propTypes = {
  title: PropTypes.string,
  infos: PropTypes.array,
  pointList: PropTypes.array
}

const KolChallenge = ({ title, information, pointList }) => {
  return (
    <BaseSectionGrid
      topContent={
        <ChallengeHeader
          title={title}
          infos={information}
          pointList={pointList}
        />
      }
      hasDivider={false}
      noPb={true}
    />
  )
}

KolChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.array.isRequired,
  pointList: PropTypes.array.isRequired
}

export default KolChallenge
