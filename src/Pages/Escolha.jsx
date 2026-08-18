import BackButton from '@/Componentes/BackButton'
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

    <div className='relative z-10 flex flex-col items-center'>

  <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

    <div className='
  w-full
  md:w-[420px]
  lg:w-[500px]
  h-[280px]

  bg-[url(/src/assets/participante.svg)]
  bg-cover
  bg-center
  bg-no-repeat

  rounded-3xl
  border border-primaria/30
  shadow-[0_0_30px_rgba(108,72,197,0.2)]

  text-texto
  p-8

  flex flex-col
  justify-between

  hover:scale-[1.02]
  hover:border-primaria
  transition-all
  duration-300
'>
  <p className='
    text-lg
    lg:text-2xl
    font-semibold
    text-center
    leading-relaxed
  '>
    Participe de hackathons e evolua em sua carreira de tecnologia,
    concorra a prêmios e oportunidades.
  </p>

  <Link
    to={'/cadastroUser'}
    className='
      w-full
      h-14

      flex
      items-center
      justify-center

      text-xl
      lg:text-2xl

      font-bold

      bg-primaria
      hover:bg-primaria-hover

      rounded-xl

      transition-all
      duration-300
    '
  >
    Participante
  </Link>
</div>

    <div className='
  w-full
  md:w-[420px]
  lg:w-[500px]
  h-[280px]

  bg-[url(/src/assets/empresa.svg)]
  bg-cover
  bg-center
  bg-no-repeat

  rounded-3xl
  border border-primaria/30
  shadow-[0_0_30px_rgba(108,72,197,0.2)]

  text-texto
  p-8

  flex flex-col
  justify-between

  hover:scale-[1.02]
  hover:border-primaria
  transition-all
  duration-300
'>
  <p className='
    text-lg
    lg:text-2xl
    font-semibold
    text-center
    leading-relaxed
  '>
    Crie seus próprios hackathons, firme parcerias e encontre as pessoas certas para sua empresa.
  </p>

  <Link
    to={'/cadastroEmpresa'}
    className='
      w-full
      h-14

      flex
      items-center
      justify-center

      text-xl
      lg:text-2xl

      font-bold

      bg-primaria
      hover:bg-primaria-hover

      rounded-xl

      transition-all
      duration-300
    '
  >
    Empresa
  </Link>
</div>

  </div>

  {/* BOTÃO ABAIXO */}
  <div className='mt-8'>
    <BackButton />
  </div>

</div>

  </div>
</div>
  )
}

export default Escolha