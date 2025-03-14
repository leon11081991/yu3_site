import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'

const TextWithTitle = ({ label, content }) => {
  return (
    <li className='flex flex-col gap-2'>
      {label && <h4 className='heading-3 text-gray-03'>{label}</h4>}
      <p
        className='text-p-1'
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      ></p>
    </li>
  )
}

TextWithTitle.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string.isRequired
}

export default TextWithTitle
