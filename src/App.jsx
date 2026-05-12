import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import CreateUsuario from './Pages/CreateUsuario'
import LoginUsuario from './Pages/LoginUsuario'
import Escolha from './Pages/Escolha'
import CreateEmpresa from './Pages/CreateEmpresa'
import EmpresaDetalhes from './Pages/formEmpresa'
import DashboardEmpresa from './Pages/Empresa/dashboard'
import CreateHackaton from './Pages/Empresa/CreateHackaton'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/' element={<h1>Rota Não Encontrada!</h1>}></Route>
        <Route path='/cadastroUser' element={<CreateUsuario />}></Route>
        <Route path='/cadastroEmpresa' element={<CreateEmpresa />}></Route>
        <Route path='/loginUser' element={<LoginUsuario />}></Route>
        <Route path='/escolha' element={<Escolha />}></Route>
        <Route path="/cadastroEmpresa/detalhes" element={<EmpresaDetalhes />} />
        <Route path='/dashboard/Empresa' element={<DashboardEmpresa/>}></Route>
        <Route path='/cadastroHackaton' element={<CreateHackaton />}></Route>
      </Routes>
  )
}

export default App