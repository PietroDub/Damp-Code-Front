import Melhores from '@/Componentes/Explorar/Melhores'
import Niveis from '@/Componentes/Explorar/NIveis'
import Search from '@/Componentes/Explorar/Search'
import SideBar from '@/Componentes/Explorar/SideBar'
import Footer from '@/Componentes/Footer'
import Header from '@/Componentes/Header'
import React from 'react'

const Explore = () => {
  return (
    <div className='bg-fundo w-full min-h-screen'>
        <Header />
        <div className='flex w-full'>
          <SideBar />
          <div className='flex flex-col w-full'>
            <Search />
            <Melhores />
            <Niveis />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Explore