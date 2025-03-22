import PropTypes from 'prop-types'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

const DescriptionBlock = ({ descriptions }) => {
  return (
    <div className='flex flex-col gap-10'>
      <ul className='flex flex-col gap-6 lg:gap-16'>
        {descriptions.map(item => (
          <TextWithTitle
            key={item.id}
            label={item.label}
            content={item.content}
          />
        ))}
      </ul>
    </div>
  )
}

DescriptionBlock.propTypes = {
  descriptions: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    content: PropTypes.string.isRequired
  })
}

export default DescriptionBlock
