import SvgIcon from '@/components/ui/SvgIcon'

interface PainPointMainContentProps {
  infos: {
    id: string
    pain: { heading: string; content: string }
    solution: { heading: string; content: string }
  }[]
}

const PainPointMainContent = ({ infos }: PainPointMainContentProps) => {
  return (
    <div className='flex flex-wrap flex-col lg:flex-row gap-8 lg:gap-[2.85%]'>
      {infos.map(({ id, pain, solution }) => (
        <div
          key={id}
          className='basis-1/2 lg:flex-1 flex-grow-0 flex flex-col lg:gap-14 gap-8'
        >
          <div className='flex-1 min-h-[80px] lg:min-h-[149px] h-full relative  px-6 py-8 flex flex-col gap-2 items-center border border-gray-02 rounded-lg'>
            <h4 className='text-h3 tracking-p1'>{pain.heading}</h4>
            <p className='flex-1 text-p1 text-gray-04 text-center tracking-p1'>{pain.content}</p>
            <div className='absolute left-1/2 top-full lg:h-14 h-8 w-1 border-l border-dashed border-white'>
              <div className='absolute left-[calc(50%-2px)] -bottom-[0.5px] -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white'></div>
            </div>
          </div>

          <div className='flex-1 lg:min-h-[161px] h-full p-6 flex flex-col gap-2 items-center bg-gray-01 rounded-lg'>
            <div>
              <SvgIcon
                iconName='check'
                svgProps={{ color: '#FFA92D' }}
              />
              <h5 className='text-h3 tracking-p1'>{solution.heading}</h5>
            </div>
            <p className='text-p1 text-gray-04 text-center tracking-p1'>{solution.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PainPointMainContent
