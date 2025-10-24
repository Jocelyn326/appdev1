import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Gallery from './Gallery'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Gallery />
  </StrictMode>,
)