import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Explore from './Pages/Explore'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/' element={<h1>Rota Não Encontrada!</h1>}></Route>
      </Routes>
  )
}

export default App