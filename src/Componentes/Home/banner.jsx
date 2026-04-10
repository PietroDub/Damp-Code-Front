import React from 'react'
import Banner_home from './banner_home'

const Banner = () => {
  return (
    <div className='h-auto w-full'>
      <div className='w-full flex md:hidden'><Banner_home texto1={"Onde desafios reais viram conquistas reais"} texto2={"Participe de hackathons criados por empresas, comunidades e especialistas, com rankings, recompensas e reconhecimento profissional. Na DAMP code, você não só aprende — você resolve problemas reais, compete e interage com outros devs e constrói um portfólio que importa."}/></div>
      <div className='hidden md:flex w-full bg-fundo-claro bg-[url(/src/assets/banner.svg)] bg-no-repeat p-10 bg-cover bg-center h-auto items-center justify-center'>
            <div className='md:w-3/5 h-full flex flex-col md:items-start justify-center text-lg lg:text-xl'>
            <img className='w-2/4 md:w-2/4 xl:w-1/4' src="/src/assets/DAMPCode.svg" alt="" />
            <h2 className='text-primaria text-2xl'><b>Onde desafios reais viram conquistas reais</b></h2>
            <p className='text-texto'>Participe de hackathons criados por empresas, comunidades e especialistas, com rankings, recompensas e reconhecimento profissional. Na DAMP code, você não só aprende — você resolve problemas reais, compete e interage com outros devs e constrói um portfólio que importa.</p>
        </div>
        <div className='1/3 h-1/2 flex items-center justify-center'>
            <a className='bg-amarelo text-fundo text-lg font-bold py-3 px-5 rounded-full' 
            href="">
                NÃO PERCA OPORTUNIDADES
            </a>
        </div>
      </div>
    </div>
  )
}

export default Banner