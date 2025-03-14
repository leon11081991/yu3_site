import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'

const InterviewCard = ({ interview }) => {
  return (
    <li className='flex-1 flex flex-col gap-4 items-center'>
      <h5 className='px-3 text-p1 bg-gray-02 rounded-lg'>{interview.character}</h5>
      <p className='flex-1 text-h3 text-center'>“ {interview.comment}”</p>

      <div className='flex-1 flex flex-col items-center justify-between h-full'>
        <div className='flex-1'>
          {/* Avatar image */}
          <div className='block w-[120px] h-[120px] -z-10'>
            <img
              src={interview.avatar}
              alt={`${interview.character}'s avatar`}
            />
          </div>
          <div className='flex-1 px-6 py-4 bg-primary-01 border border-secondary-03 rounded-lg'>
            <p className='text-p1 text-center'>{interview.wish}</p>
          </div>
        </div>

        <ul className='flex-1 w-full flex flex-col items-center justify-center px-6 py-4 bg-gray-02 rounded-lg'>
          {interview.conclusions.map(conclusion => (
            <li
              key={conclusion.id}
              className='text-p1'
            >
              #{conclusion.content}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

InterviewCard.propTypes = {
  interview: PropTypes.object
}

const KolInterview = ({ title, descriptions, interviewList }) => {
  return (
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={title}
          descriptions={descriptions}
        />
      }
      mainContent={
        <ul className='flex gap-16'>
          {interviewList.map(interview => (
            <InterviewCard
              key={interview.id}
              interview={interview}
            />
          ))}
        </ul>
      }
    />
  )
}

KolInterview.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array,
  interviewList: PropTypes.array
}

export default KolInterview
