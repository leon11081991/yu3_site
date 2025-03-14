import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '@/components/ui/SvgIcon'

const MandalaProcessChart = ({ information }) => {
  return (
    <div>
      <ul className='flex flex-wrap justify-center gap-4'>
        {information.map((info, index) => {
          const isFirst = index === 0
          const isLast = index === information.length - 1
          return (
            <React.Fragment key={index}>
              <li className='flex flex-col items-center gap-6 min-w-40'>
                <div
                  className={`w-full max-w-[150px] aspect-square rounded-full overflow-hidden flex flex-col items-center justify-center gap-1 ${isFirst || isLast ? 'bg-gray-01' : 'border border-secondary-01'}`}
                >
                  <span className='text-secondary-01 text-p2'>{info.category}</span>
                  <p className='text-h3'>{info.stepName}</p>
                </div>
                <p className='text-p1'>{info.description}</p>
              </li>
              {!isLast && (
                <div className='w-8 h-8 mt-14'>
                  <SvgIcon
                    iconName='arrowRight'
                    svgProps={{ width: '32px', height: '32px' }}
                  />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

MandalaProcessChart.propTypes = {
  information: PropTypes.array.isRequired
}

export default MandalaProcessChart
