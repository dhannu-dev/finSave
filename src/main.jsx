import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FinProvider } from './Context/FinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FinProvider>
    <App />
    </FinProvider>
  </StrictMode>,
)
