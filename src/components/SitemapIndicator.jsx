import PropTypes from 'prop-types'

const DEFAULT_COLOR = 'primary-02'

const labelSizeMap = {
  normal: 'w-4 h-4',
  small: 'w-1 h-1'
}

const labelClassMap = {
  filled: {
    'primary-01': 'bg-primary-01',
    'primary-02': 'bg-primary-02',
    'secondary-01': 'bg-secondary-01',
    'secondary-02': 'bg-secondary-02',
    'secondary-03': 'bg-secondary-03',
    'secondary-04': 'bg-secondary-04',
    'gray-01': 'bg-gray-01',
    'gray-02': 'bg-gray-02'
  },
  unfilled: {
    'primary-01': 'border border-primary-01',
    'primary-02': 'border border-primary-02',
    'secondary-01': 'border border-secondary-01',
    'secondary-02': 'border border-secondary-02',
    'secondary-03': 'border border-secondary-03',
    'secondary-04': 'border border-secondary-04',
    'gray-01': 'border border-gray-01',
    'gray-02': 'border border-gray-02'
  }
}

const getIndicatorClass = (type, size, color = DEFAULT_COLOR) => {
  // const isFilled = type === 'filled'

  // TODO: tailwind 動態class名稱有可能會有錯誤
  // const labelClass = isFilled ? `bg-${color}` : `border border-${color}`
  return `rounded-full ${labelSizeMap[size]} ${labelClassMap[type][color]}`
}

const SitemapIndicator = ({ indicators }) => {
  return (
    <ul className='flex flex-wrap self-start gap-6'>
      {indicators.map(({ id, labelText, labelType }) => (
        <li
          key={id}
          className='flex items-center gap-2'
        >
          <div className={getIndicatorClass(labelType.type, labelType.size, labelType.color)}></div>
          <p className='text-p1'>{labelText}</p>
        </li>
      ))}
    </ul>
  )
}

SitemapIndicator.propTypes = {
  indicators: PropTypes.array.isRequired
}

export default SitemapIndicator
