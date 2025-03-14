import { useRef, useState, useEffect } from 'react'

export function useDynamicSvgImport(iconName) {
  const importedIconRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)

    const importSvgIcon = async () => {
      try {
        importedIconRef.current = (await import(`@/assets/icons/${iconName}.svg`)).ReactComponent
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
