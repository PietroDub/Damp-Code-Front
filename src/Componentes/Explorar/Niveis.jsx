import React from 'react'
import Titulo from '../Titulo'

const Niveis = () => {
  return (
    <section className='w-full h-auto flex flex-col items-center'>
        <div className='w-9/10 flex items-center'>
            <Titulo texto1={"Desafios de niveis"} texto2={"diferentes"}/>
        </div>
        <div className='w-9/10 hidden lg:flex items-center justify-center gap-x-5'>
           <div className='lg:w-3/10 text-center flex items-center justify-center'>
               <h1 className='text-rosa-claro text-2xl bg-fundo-claro p-10 px-15  border-rosa-claro border-2'><b>Iniciante</b></h1>
           </div>
           <div className='lg:w-3/10 text-center flex items-center justify-center '>
               <h1 className='text-rosa-claro text-2xl bg-fundo-claro p-10 px-15 border-rosa-claro border-2'><b>Intermediário</b></h1>
           </div>
           <div className='lg:w-3/10 text-center flex items-center justify-center '>
               <h1 className='text-rosa-claro text-2xl bg-fundo-claro p-10 px-15 border-rosa-claro border-2'><b>Avançado</b></h1>
           </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center lg:hidden gap-y-5'>
            <div href="" className='bg-amarelo text-fundo text-2xl h-20 w-1/2 text-center flex justify-center items-center'><a href=""><b>Iniciante</b></a></div>
            <div href="" className='bg-amarelo text-fundo text-2xl h-20 w-1/2 text-center flex justify-center items-center'><a href=""><b>Intermediário</b></a></div>
            <div href="" className='bg-amarelo text-fundo text-2xl h-20 w-1/2 text-center flex justify-center items-center'><a href=""><b>Avançado</b></a></div>
        </div>
    </section>
  )
}

export default Niveis