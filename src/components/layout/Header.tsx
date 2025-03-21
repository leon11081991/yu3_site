import React from 'react'
import { Link } from 'react-router-dom'
import { useSidebar } from '@/shared/contexts/SidebarContext'

interface HeaderProps {
  appName: string
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  const { isOpen, setIsOpen } = useSidebar()

  const handleHamburgerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    setIsOpen(prevState => !prevState)
  }

  return (
    <header className='sticky top-0 px-[var(--header-padding-x)] flex justify-between items-center h-[var(--header-height)] z-50'>
      <div>
        <h1 className='text-logo tracking-logo'>
          <Link to='/'>{appName}</Link>
        </h1>
      </div>

      <div
        className='w-[var(--hamburger-width)] h-[var(--hamburger-height)] rounded-full cursor-pointer flex items-center justify-center transition-all hover:bg-gray-02 z-50'
        onClick={handleHamburgerClick}
      >
        <div className='relative p-2 w-8 h-8'>
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 block w-[14px] h-[2px] rounded-sm bg-primary-02 transition-all duration-300 ${isOpen ? 'rotate-45 -translate-y-1/2' : '-translate-y-1'}`}
          ></span>
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block w-[14px] h-[2px] rounded-sm bg-primary-02 transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1'}`}
          ></span>
        </div>
      </div>
    </header>
  )
}

export default Header
