interface ProgressBarItemProps {
  type: string
  percentage: number
  showPercentage?: boolean
  isHighlight?: boolean
}

const ProgressBarItem = ({
  type,
  percentage,
  showPercentage = true,
  isHighlight = false
}: ProgressBarItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-4'>
        <p className='text-p1'>{type}</p>
        {showPercentage && (
          <p className={`text-p1 ${isHighlight ? 'text-secondary-02' : 'text-gray-03'}`}>
            {percentage}%
          </p>
        )}
      </div>
      <div className='relative w-full h-6 bg-gray-01'>
        <div
          className={`absolute h-full ${isHighlight ? 'bg-secondary-02' : 'bg-gray-02 opacity-15'}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBarItem
