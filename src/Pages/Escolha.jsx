import ColorBends from '@/Componentes/FundoPersonalizado1'
import React from 'react'
import { Link } from 'react-router-dom'

const Escolha = () => {
  return (
    <div className='w-full h-screen relative bg-fundo flex justify-center items-center overflow-hidden'>

  {/* BACKGROUND */}
  <div className='absolute inset-0 z-0'>
    <ColorBends
      colors={["#FFEA00", "#6C48C5", "#C68FE6"]}
      rotation={90}
      speed={0.2}
      scale={1}
      frequency={1}
      warpStrength={1}
      mouseInfluence={1}
      noise={0.15}
      parallax={0.5}
      iterations={1}
      intensity={1.5}
      bandWidth={6}
      transparent
      autoRotate={0}
      color="#A855F7"
    />
  </div>

  {/* CONTEÚDO */}
  <div className='relative z-10 flex flex-col md:flex-row items-center justify-center gap-10'>

    <div className='md:w-1/4 xl:w-1/6 h-80 bg-[url(/src/assets/participante.svg)] bg-no-repeat bg-cover text-texto p-5 flex flex-col items-center justify-between '>
      <p className='text-lg font-semibold py-5 text-center'>
        Participe de hackathons e evolua em sua carreira de técnologia, concorra a prêmios e oportunidades.
      </p>
      <Link 
        to={'/cadastroUser'} 
        className='text-xl font-bold bg-primaria hover:bg-primaria-hover h-1/4 w-full flex items-center justify-center rounded-lg'
      >
        Participante
      </Link>
    </div>

    <div className='md:w-1/4 xl:w-1/6 h-80 bg-[url(/src/assets/empresa.svg)] bg-no-repeat bg-cover text-texto p-5 flex flex-col items-center justify-between '>
      <p className='text-lg font-semibold py-5 text-center'>
        Crie seus próprios hackathons, firme parcerias e encontre as pessoas certas para sua empresa.
      </p>
      <Link 
        to={'/cadastroEmpresa'} 
        className='text-xl font-bold bg-primaria hover:bg-primaria-hover h-1/4 w-full flex items-center justify-center rounded-lg'
      >
        Empresa
      </Link>
    </div>

  </div>
</div>
  )
}

export default Escolha