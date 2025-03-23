import React, { useState } from 'react'

interface ContactMeProps {
  handleBgColor: (color: string) => void
}

const ContactMe: React.FC<ContactMeProps> = ({ handleBgColor }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    handleBgColor('#2c2c2c')
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    handleBgColor('')
  }

  return (
    <section
      className={`${isHovered ? 'bg-gray-01' : ''} min-h-[calc(100dvh-var(--footer-height--mobile))] md:min-h-[calc(100dvh-var(--footer-height))] flex justify-center items-center transition-colors duration-300`}
    >
      <a
        target='_blank'
        href='mailto:lillian.lin33@gmail.com'
        className='relative text-4xl font-normal underline-hover-animation'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        rel='noreferrer'
      >
        Contact Me
      </a>
    </section>
  )
}

export default ContactMe
