import { useState } from 'react'

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className={`${isHovered ? 'bg-gray-01' : ''} min-h-[calc(100dvh-var(--header-height))] flex justify-center items-center transition ease-out duration-300`}
    >
      <a
        target='_blank'
        href='mailto:lillian.lin33@gmail.com'
        className='text-4xl font-normal'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        rel='noreferrer'
      >
        Contact Me
      </a>
    </section>
  )
}

export default ContactMe
