import React from 'react'
import Titulo from '../Titulo'
import { Link } from 'react-router-dom'

const Criar_Desafio = () => {
  return (
    <section className='w-full h-full md:h-2/4 flex flex-col items-center'>
        <div className='w-9/10'>
             <Titulo texto1={"Crie seu próprio"} texto2={"desafio!"}/>
        </div>
        <div className='w-8/10 flex justify-center flex-col h-60 items-center lg:bg-[url(/src/assets/fundo.png)] bg-no-repeat p-10 bg-cover bg-center '>
          <p className='hidden lg:flex text-texto text-lg p-5 font-bold'>Crie seus próprios desafios para outros membros da comunidade, ou se junte como empresa parceira e tenha acesso a funcionalidades limitadas e encontre os melhores talentos!</p>
          <p className='flex lg:hidden text-texto text-lg p-5 font-bold'>Crie seus próprios desafios para outros membros da comunidade</p>
            <div className='bg-amarelo h-60 lg:h-1/2 flex items-center justify-center'>
              <Link to={"/cadastroHackaton"} className='px-10 text-2xl'><b>CRIE AGORA</b></Link>
            </div>
        </div>
    </section>
  )
}

export default Criar_Desafio