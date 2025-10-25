import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './Gallery'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
    <App />
</StrictMode>,
)