import React from 'react'

const Cards = () => {
  return (
    <section className='w-full h-auto text-texto flex flex-col md:flex justify-center items-center py-4'>
        <div className='flex text-3xl font-bold pb-5'>
            <h1 className='py-5 text-amarelo border-b-2 border-amarelo'>
            COMEÇE A  
        </h1>
        <h1 className='py-5 pl-1 text-rosa-claro border-b-2 border-rosa-claro'>
            CRESCER 
        </h1>
        </div>
        <div className='w-9/10 md:flex justify-center items-center gap-x-5'>
        <div className='w-4/4 mt-5 md:mt-0 md:w-2/5 lg:w-1/5 bg-[url(/src/assets/Cards-Comece.svg)] bg-no-repeat bg-cover bg-center h-50 xl:h-70 flex flex-col justify-center text-center'>
            <h1 className='text-xl'><b>COMEÇE</b></h1>
            <h2 className='p-3'>Escolha um hackathon, entre na 
                competição e desenvolva sua solução
            </h2>
        </div>
        <div className='w-4/4 mt-5 md:mt-0 md:w-2/5 lg:w-1/5  bg-[url(/src/assets/Cards-Ranking.svg)] bg-no-repeat bg-cover bg-center h-50 xl:h-70 flex flex-col justify-center text-center'>
            <h1 className='text-xl'><b>Suba no Ranking</b></h1>
            <h2 className='p-3'>Ganhe pontos, níveis e reconhecimento público</h2>
        </div>
        <div className='w-4/4 mt-5 md:mt-0 md:w-2/5 lg:w-1/5 bg-[url(/src/assets/Cards-Premios.svg)] bg-no-repeat bg-cover bg-center h-50 xl:h-70 flex flex-col justify-center text-center'>
            <h1 className='text-xl'><b>Conquiste Prêmios</b></h1>
            <h2 className='p-3'>Dinheiro, oportunidades, contratação e visibilidade.</h2>
        </div>
        <div className='w-4/4 mt-5 md:mt-0 md:w-2/5 lg:w-1/5  bg-[url(/src/assets/Cards-Reputacao.svg)] bg-no-repeat bg-cover bg-center h-50 xl:h-70 flex flex-col justify-center text-center'>
            <h1 className='text-xl'><b>Construa sua Reputação</b></h1>
            <h2 className='p-3'>Seu perfil vira um portfólio competitivo.</h2>
        </div>
        </div>
    </section>
  )
}

export default Cards