import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import CheckIcon from '@/assets/icons/check.svg'

const PainPointHeader = ({ title }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
    </>
  )
}

PainPointHeader.propTypes = {
  title: PropTypes.string.isRequired
}

const PainPointMainContent = ({ infos }) => {
  return (
    <div className='flex flex-wrap gap-8'>
      {infos.map(({ id, pain, solution }) => (
        <div
          key={id}
          className='basis-1/2 lg:flex-1 max-w-[calc(50%-1rem)] flex-grow-0 flex flex-col gap-14'
        >
          <div className='flex-1 min-h-[149px] h-full relative  px-6 py-8 flex flex-col gap-2 items-center border border-gray-02 rounded-lg'>
            <h5 className='text-h3 tracking-p1'>{pain.heading}</h5>
            <p className='flex-1 text-p1 text-gray-04 text-center tracking-p1'>{pain.content}</p>
            <div className='absolute left-1/2 top-full h-14 w-1 border-l border-dashed border-white'>
              <div className='absolute left-[calc(50%-2px)] -bottom-[0.5px] -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white'></div>
            </div>
          </div>

          <div className='flex-1 min-h-[161px] h-full p-6 flex flex-col gap-2 items-center bg-gray-01 rounded-lg'>
            <div>
              <img
                src={CheckIcon}
                className='mx-auto'
              />
              <h5 className='text-h3 tracking-p1'>{solution.heading}</h5>
            </div>
            <p className='text-p1 text-gray-04 text-center tracking-p1'>{solution.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

PainPointMainContent.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pain: PropTypes.object,
      solution: PropTypes.object
    })
  )
}

const PingoPainPoint = ({ title, informations }) => {
  return (
    <BaseSectionGrid
      topContent={<PainPointHeader title={title} />}
      mainContent={<PainPointMainContent infos={informations} />}
    />
  )
}

PingoPainPoint.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pain: PropTypes.object,
      solution: PropTypes.object
    })
  )
}

export default PingoPainPoint
