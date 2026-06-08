import React from 'react'
import Header from '../Componentes/Header'
import "../style.css"
import Banner from '../Componentes/Home/banner'
import Cards from '../Componentes/Home/Cards'
import Ranking_Home from '../Componentes/Home/Ranking_Home'
import Banner_empresa from '../Componentes/Home/banner_empresa'
import Game from '@/Componentes/Home/Game'
import Comunidade_home from '@/Componentes/Home/Comunidade_home'
import Footer from '@/Componentes/Footer'

const Home = () => {
  return (
    <div className='bg-fundo w-full min-h-screen'>
      <Header />

      <section id="inicio">
        <Banner />
      </section>

      <section id="explore">
        <Cards />
      </section>

      <section id="ranking">
        <Ranking_Home />
      </section>

      <section id="empresas">
        <Banner_empresa />
      </section>

      <section id="game">
        <Game />
      </section>

      <section id="comunidade">
        <Comunidade_home />
      </section>

      <Footer />
    </div>
  )
}

export default Home