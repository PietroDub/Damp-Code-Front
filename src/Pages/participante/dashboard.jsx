import Melhores from '@/Componentes/Explorar/Melhores'
import Niveis from '@/Componentes/Explorar/Niveis'
import SideBar from '@/Componentes/Explorar/SideBar'
import Footer from '@/Componentes/Footer'
import Header from '@/Componentes/Header'
import { Search } from 'lucide-react'
import React from 'react'

const DashboardParticipantes = () => {
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

export default DashboardParticipantes