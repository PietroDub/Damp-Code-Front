import "./style.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CadastroProvider } from "./Componentes/utilidades/CadastroContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <CadastroProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CadastroProvider>
)