import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Coil from './nodes/Coil.jsx'
import Contact from './nodes/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Coil />
    <Contact />
  </StrictMode>,
)
