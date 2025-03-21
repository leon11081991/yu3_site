import React, { useState } from 'react'

const ContactMe: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section
      className={`${isHovered ? 'bg-gray-01' : ''} min-h-[calc(100dvh)] flex justify-center items-center transition ease-out duration-300`}
    >
      <a
        target='_blank'
        href='mailto:lillian.lin33@gmail.com'
        className='text-4xl font-normal'
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
