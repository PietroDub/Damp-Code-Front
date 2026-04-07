import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import Home from './Pages/Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
