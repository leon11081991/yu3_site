import PropTypes from 'prop-types'

const BarChartItem = ({ type, percentage, showPercentage = true, isHighlight = false }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-4'>
        <p className='text-p1'>{type}</p>
        {showPercentage && (
          <p className={`text-p1 ${isHighlight ? 'text-secondary-02' : 'text-gray-02'}`}>
            {percentage}%
          </p>
        )}
      </div>
      <div className='relative w-full h-6 bg-gray-01'>
        <div
          className={`absolute h-full ${isHighlight ? 'bg-secondary-02' : 'bg-gray-02 opacity-20'}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

BarChartItem.propTypes = {
  type: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  showPercentage: PropTypes.bool,
  isHighlight: PropTypes.bool
}

export default BarChartItem
