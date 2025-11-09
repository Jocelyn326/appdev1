import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './Component/Gallery.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery/>
  </StrictMode>,
)
