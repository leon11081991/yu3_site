import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export default function TabFilter({ tabs, activeTab, setActiveTab }) {
  return (
    <div className='flex justify-center mb-6 lg:mb-16'>
      <div className='relative flex '>
        {tabs.map(tab => (
          <button
            key={tab.type}
            className={`tab py-1 px-4 md:px-8 text-p1 font-p1 text-gray-04 ${activeTab === tab.type ? 'text-primary-02' : ''}`}
            onClick={() => setActiveTab(tab.type)}
          >
            {tab.label}
            {activeTab === tab.type && (
              <motion.div
                layoutId='underline'
                className='absolute left-0 bottom-0 w-full h-full rounded-[200px] bg-gray-01 -z-10'
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

TabFilter.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func
}
