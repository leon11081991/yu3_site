import PropTypes from 'prop-types'
import DescriptionBlock from '@/components/molecules/DescriptionBlock'

const ContentHeader = ({ title, descriptions, className = '', children }) => {
  return (
    <>
      <h3 className='heading-3'>{title}</h3>
      <div className={`${children ? 'flex flex-col gap-16' : ''} ${className}`}>
        {descriptions && <DescriptionBlock descriptions={descriptions} />}
        {children}
      </div>
    </>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    content: PropTypes.string.isRequired
  }),
  className: PropTypes.string,
  children: PropTypes.node
}

export default ContentHeader
