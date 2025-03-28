import PropTypes from 'prop-types'

const UserCard = ({ title, content, userImage }) => {
  return (
    <div className='grid grid-cols-[50px_1fr] lg:grid-cols-[80px_1fr] gap-4 bg-gray-01 px-7 py-6 rounded-lg  items-start lg:items-center'>
      <div className='w-[50px] h-[50px] lg:w-20 lg:h-20'>
        <img
          src={userImage}
          alt='user'
          className='w-full h-full rounded-full'
        />
      </div>
      <div className='flex flex-col justify-center gap-2 h-full'>
        <h4 className='text-h3'>{title}</h4>
        <p className='text-p1 text-gray-04'>{content}</p>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired
}

export default UserCard
