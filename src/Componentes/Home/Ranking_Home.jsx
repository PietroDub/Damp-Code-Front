import React from 'react'
import Titulo from '../Titulo'

const Ranking_Home = () => {
  return (
    <section className='w-full flex flex-col h-auto items-center'>
        <div className='w-9/10 flex items-center justify-start'>
            <Titulo texto1={"RANKING AO"} texto2={"VIVO"} />
        </div>
        <div className='w-9/10 md:flex items-center justify-center md:gap-x-5'>
            <div className='w-full my-5 h-60 xl:h-80 text-center flex flex-col text-texto bg-fundo-claro justify-center items-center md:w-3/9'>
                <h1 className='text-xl'><b>TOP 5 GLOBAL</b></h1>
                <p className='px-3'>Este é o top 5 de todas as competições, os mais dedicados.</p>
                <h2 className='px-3 flex md:hidden xl:flex'>Os desenvolvedores mais consistentes e ativos da plataforma no momento.</h2>
            </div>
            <div className='w-full my-5 h-60 xl:h-80 text-center flex flex-col text-texto bg-fundo-claro justify-center items-center md:w-3/9'>
                <h1 className='text-xl'><b>TOP 5 FOODLOVERS</b></h1>
                <p className='px-3'>Este é o top 5 do nosso hackaton em parceria com a ifood.</p>
                <h2 className='px-3 flex md:hidden xl:flex'>Se dedique nos hackatons em parceria com ifood e ganhe oportunidades.</h2>
            </div>
            <div className='w-full my-5 h-60 xl:h-80 text-center flex flex-col text-texto bg-fundo-claro justify-center items-center md:w-3/9'>
                <h1 className='text-xl'><b>TOP 5 NATIVES</b></h1>
                <p className='px-3'>Este é o top 5 da competição da ferramenta react Native.</p>
                <h2 className='px-3 flex md:hidden xl:flex'>Se torne um talento nativo e melhores suas habilidades no framework.</h2>
            </div>
        </div>
    </section>
  )
}

export default Ranking_Home