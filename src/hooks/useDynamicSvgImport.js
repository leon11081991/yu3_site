import { useRef, useState, useEffect, useReducer } from 'react'

export function useDynamicSvgImport(iconName) {
  const importedIconRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    setLoading(true)

    const importSvgIcon = async () => {
      try {
        importedIconRef.current = (await import(`@/assets/icons/${iconName}.svg`)).ReactComponent
        forceUpdate()
      } catch (error) {
        setError(error)
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    importSvgIcon()
  }, [iconName])

  return { error, loading, Icon: importedIconRef.current }
}
