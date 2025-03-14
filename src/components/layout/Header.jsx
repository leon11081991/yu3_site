import PropTypes from 'prop-types'

export default function Header({ appName }) {
  return (
    <header className='sticky top-0 px-[var(--header-padding-x)] flex justify-between items-center h-[var(--header-height)] z-50'>
      <div>
        <h1 className='text-logo tracking-logo'>{appName}</h1>
      </div>

      <div className='w-[var(--hamburger-width)] h-[var(--hamburger-height)] rounded-full cursor-pointer flex items-center justify-center transition-all hover:bg-gray-02'>
        <div className='p-2 w-8 h-8 flex flex-col justify-around items-center'>
          <span className='block w-full h-[2px] rounded-sm bg-primary-02'></span>
          <span className='block w-full h-[2px] rounded-sm bg-primary-02'></span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  appName: PropTypes.string.isRequired
}
