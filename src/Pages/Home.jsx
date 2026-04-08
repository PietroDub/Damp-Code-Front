import React from 'react'
import Header from '../Componentes/Header'
import "../style.css"
import Banner from '../Componentes/Home/banner'
import Cards from '../Componentes/Home/Cards'
import Ranking_Home from '../Componentes/Home/Ranking_Home'
import Banner_empresa from '../Componentes/Home/banner_empresa'
import Game from '@/Componentes/Home/Game'

const Home = () => {
  return (
    <div className='bg-fundo w-full min-h-screen'>
      <Header />
      <Banner />
      <Cards />
      <Ranking_Home />
      <Banner_empresa />
      <Game />
    </div>
  )
}

export default Home