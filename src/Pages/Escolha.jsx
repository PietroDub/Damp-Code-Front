import React from 'react'
import { Link } from 'react-router-dom'

const Escolha = () => {
  return (
    <div className='w-full h-screen bg-fundo flex flex-col md:flex-row items-center justify-center gap-x-10'>
      <div className='w-full md:w-1/4 xl:w-1/6 h-1/4 bg-fundo-claro flex items-center justify-center'>
        <Link className='text-2xl text-texto font-bold bg-fundo-claro'>Participante</Link>
      </div>
      <div className='w-full md:w-1/4 xl:w-1/6 h-1/4 bg-fundo-claro flex items-center justify-center'>
        <Link className='text-2xl text-texto font-bold bg-fundo-claro'>Empresa</Link>
      </div>
    </div>
  )
}

export default Escolha