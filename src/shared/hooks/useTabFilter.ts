import { useState } from 'react'

type BaseTabFilter = {
  type: string
}

interface UseTabFilterProps<T extends BaseTabFilter> {
  defaultTab: string
  data: T[]
}
export const useTabFilter = <T extends BaseTabFilter>({
  defaultTab,
  data
}: UseTabFilterProps<T>) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const filteredData =
    activeTab === defaultTab ? data : data.filter(item => item.type === activeTab)

  return { activeTab, setActiveTab, filteredData }
}
