import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/styles/main.scss'
import App from '@/App.jsx'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
