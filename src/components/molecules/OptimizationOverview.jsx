import PropTypes from 'prop-types'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const OptimizationOverview = ({ isOptimized, title, image }) => {
  return (
    <div className='flex flex-col items-start gap-6'>
      <div className='py-1 px-3 bg-gray-01 rounded-[4px] flex gap-2.5 items-center'>
        {isOptimized && <span className='block w-1 h-1 rounded-full bg-secondary-03'></span>}
        <h4 className='inline-block text-p1 font-p1'>{title}</h4>
      </div>

      <div className='p-10 bg-gray-01 rounded-[10px]'>
        <BlurLazyImage {...image} />
      </div>
    </div>
  )
}

OptimizationOverview.propTypes = {
  isOptimized: PropTypes.bool,
  title: PropTypes.string,
  image: PropTypes.object
}

export default OptimizationOverview
