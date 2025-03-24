import PropTypes from 'prop-types'

const InterviewCard = ({ interview }) => {
  return (
    <li className='flex-1 flex flex-col gap-4 items-center h-full'>
      {/* Position */}
      <div className='flex-grow-0 flex flex-col items-center'>
        <h5 className='px-3 text-p1 font-p1 bg-gray-02 rounded-lg mb-4'>{interview.character}</h5>
        <p className='text-h3 font-h3 text-center min-h-[24px]'>“ {interview.comment}”</p>
      </div>

      <div className='flex-1 flex flex-col items-center justify-between h-full'>
        <div className='relative flex-1 mb-14 flex flex-col items-center after:content-normal after:absolute after:-bottom-7 after:left-1/2 after:transform after:-translate-x-1/2 after:border-l-[6px] after:border-r-[6px] after:border-t-[10px] after:border-t-secondary-04 after:border-l-transparent after:border-r-transparent '>
          {/* Avatar image */}
          <div className='block w-[120px] h-[120px] -z-10'>
            <img
              src={interview.avatar}
              alt={`${interview.character}'s avatar`}
            />
          </div>
          <div className='flex-1 px-6 py-4 -mt-[30px] bg-primary-01 border border-secondary-04 rounded-lg'>
            <p className='text-p1 font-p1 text-center'>{interview.wish}</p>
          </div>
        </div>

        <ul className='flex-1 w-full flex flex-col items-center justify-center px-6 py-4 bg-gray-02 rounded-lg'>
          {interview.conclusions.map(conclusion => (
            <li
              key={conclusion.id}
              className='text-p1 font-p1'
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

export default InterviewCard
