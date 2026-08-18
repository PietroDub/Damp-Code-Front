import Melhores from '@/Componentes/Explorar/Melhores'
import Niveis from '@/Componentes/Explorar/Niveis'
import SideBar from '@/Componentes/Explorar/SideBar'
import Footer from '@/Componentes/Footer'
import Header from '@/Componentes/Header'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'


const DashboardParticipantes = () => {
  const [hackathons, setHackathons] = useState([])

  async function fetchHackathons() {
  try {
    const response = await fetch(
      "https://localhost:7092/api/Hackathons"
    )

    const data = await response.json()

    console.log("Dados vindos da API:")
    console.log(data)

    setHackathons(data)

  } catch (error) {
    console.error(error)
  }
}

useEffect(() => {
  fetchHackathons()
}, [])

useEffect(() => {
  console.log("Estado hackathons:")
  console.log(hackathons)
}, [hackathons])

  return (
    <div className='bg-fundo w-full min-h-screen'>
        <Header />
        <div className='flex w-full'>
          <SideBar />
          <div className='flex flex-col w-full'>
            <Search />
            <Melhores hackathons={hackathons} />
            <Niveis />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default DashboardParticipantes