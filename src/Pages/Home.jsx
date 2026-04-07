import React from 'react'
import Header from '../Componentes/Header'
import "../style.css"
import Banner from '../Componentes/Home/banner'
import Cards from '../Componentes/Home/Cards'

const Home = () => {
  return (
    <div className='bg-fundo w-full min-h-screen'>
      <Header />
      <Banner />
      <Cards />
    </div>
  )
}

export default Home