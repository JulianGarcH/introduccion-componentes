import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contenido from './Contenido'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenido />
    <Contenido />
    <Contenido />
    <Contenido />
    <Contenido />
    <Contenido />
  </StrictMode>,
)

