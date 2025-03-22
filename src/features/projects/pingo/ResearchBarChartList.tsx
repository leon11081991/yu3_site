import ProgressBarItem from '@/components/ProgressBarItem'

interface ResearchBarChartListProps {
  sources: {
    title: string
    source: string
    chartSources: any[]
  }[]
}

const ResearchBarChartList = ({ sources }: ResearchBarChartListProps) => {
  return (
    <div className='flex gap-14 flex-col lg:flex-row'>
      {sources.map(({ title, source, chartSources }) => (
        <ul
          key={title}
          className='flex-1 flex flex-col gap-10'
        >
          <li>
            <div className=' flex flex-col gap-2'>
              <p className='text-h3'>{title}</p>
              <span className='text-p2 text-gray-04'>資料來源：{source}</span>
            </div>
            <div className='flex flex-col gap-6'>
              {chartSources.map(item => (
                <ProgressBarItem
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default ResearchBarChartList
