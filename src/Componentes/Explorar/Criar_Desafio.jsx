import React from 'react'
import Titulo from '../Titulo'

const Criar_Desafio = () => {
  return (
    <section className='w-full h-80 flex flex-col items-center'>
        <div className='w-9/10'>
             <Titulo texto1={"Crie seu próprio"} texto2={"desafio!"}/>
        </div>
        <div className='w-8/10 flex justify-center flex-col h-60 items-center bg-[url(/src/assets/fundo.png)] bg-no-repeat p-10 bg-cover bg-center '>
            <p className='text-texto text-lg p-5 font-bold'>Crie seus próprios desafios para outros membros da comunidade, ou se junte como empresa parceira e tenha acesso a funcionalidades limitadas e encontre os melhores talentos!</p>
            <button className='bg-amarelo py-5 px-10 text-2xl'><b>CRIE AGORA</b></button>
        </div>
    </section>
  )
}

export default Criar_Desafio