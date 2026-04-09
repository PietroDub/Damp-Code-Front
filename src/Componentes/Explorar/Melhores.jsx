import React from 'react'
import Titulo from '../Titulo'
import Card_empresa from '../Card_empresa'

const Melhores = () => {
  return (
    <section className='w-full h-auto flex flex-col items-center justify-center'>
        <div className='w-9/10 flex items-center gap-x-10'>
            <Titulo texto1={"MELHORES"} texto2={"DA SEMANA"}/>
            <a className='text-sm text-texto'>ver os outros</a>
        </div>
        <div className='w-full gap-y-3 flex flex-col md:flex-row gap-x-2 xl:gap-x-5 flex-wrap items-center justify-center'>
            <Card_empresa texto={"DIO - DAMP_CODE Engenharia de dados"} image={"/src/assets/DIO_HACKATON.svg"} />
            <Card_empresa texto={"DIO - DAMP_CODE Engenharia de dados"} image={"/src/assets/DIO_HACKATON.svg"} />
            <Card_empresa texto={"DIO - DAMP_CODE Engenharia de dados"} image={"/src/assets/DIO_HACKATON.svg"} />
            <Card_empresa texto={"DIO - DAMP_CODE Engenharia de dados"} image={"/src/assets/DIO_HACKATON.svg"} />

        </div>
    </section>
  )
}

export default Melhores