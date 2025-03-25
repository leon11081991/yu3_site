import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
  const navigate = useNavigate()

  const navigateByStep = (step: number) => navigate(step)

  return { navigateByStep }
}
