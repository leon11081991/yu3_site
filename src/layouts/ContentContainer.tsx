import React from 'react'

interface ContentContainerProps {
  className?: string
  children: React.ReactNode
}

const ContentContainer: React.FC<ContentContainerProps> = ({ className, children }) => (
  <div className={`content ${className}`}>
    <div className='content-container'>{children}</div>
  </div>
)

export default ContentContainer
