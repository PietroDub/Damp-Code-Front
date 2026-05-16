import "./style.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CadastroProvider } from "./Componentes/utilidades/CadastroContext"
import { AuthProvider } from "./Componentes/utilidades/AuthContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <CadastroProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </CadastroProvider>
)