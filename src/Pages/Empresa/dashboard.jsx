import Gerenciar_Desafio from '@/Componentes/Empresa_dash/Gerenciar_Desafio'
import Criar_Desafio from '@/Componentes/Explorar/Criar_Desafio'
import SideBar from '@/Componentes/Explorar/SideBar'
import Footer from '@/Componentes/Footer'
import Header from '@/Componentes/Header'
import React from 'react'

const DashboardEmpresa = () => {
  return (
        <div className='bg-fundo w-full min-h-screen'>
        <Header />
          <div className='flex flex-col w-full h-full items-center'>
            {/* 🔥 Criar Hackathon */}
            <Criar_Desafio />
            {/* 📂 Gerenciar Hackathons */}
            <Gerenciar_Desafio />

{/* Editar / Pausar / Encerrar
👥 Visualizar Participantes
Lista rápida dos inscritos
🏆 Ver Rankings & Dados
leva para DashboardEmpresa completa */}
        </div>
        <Footer />
    </div>
  )
}

export default DashboardEmpresa