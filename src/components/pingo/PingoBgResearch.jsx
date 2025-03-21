import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import BarChartItem from '@/components/BarChartItem'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

const PingoBgResearch = ({ title, dataSources, information }) => {
  // return <BaseSectionGrid />
  return (
    <ContentContainer>
      <section className='section-container border-b-[1px] border-gray-03'>
        <div className='two-cols-container'>
          <h3 className='heading-2'>{title}</h3>
          <div className='flex flex-col gap-16'>
            <div className='flex gap-14'>
              {dataSources.map(({ title, source, chartSources }) => (
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
                        <BarChartItem
                          key={item.id}
                          {...item}
                        />
                      ))}
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <ul className='flex flex-col gap-8'>
              {information.map(item => (
                <TextWithTitle
                  key={item.label}
                  label={item.label}
                  content={item.content}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ContentContainer>
  )
}

PingoBgResearch.propTypes = {
  title: PropTypes.string.isRequired,
  dataSources: PropTypes.array.isRequired,
  information: PropTypes.array.isRequired
}

export default PingoBgResearch
