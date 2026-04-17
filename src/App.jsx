import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import CreateUsuario from './Pages/CreateUsuario'
import LoginUsuario from './Pages/LoginUsuario'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/' element={<h1>Rota Não Encontrada!</h1>}></Route>
        <Route path='/cadastroUser' element={<CreateUsuario />}></Route>
        <Route path='/loginUser' element={<LoginUsuario />}></Route>
      </Routes>
  )
}

export default App