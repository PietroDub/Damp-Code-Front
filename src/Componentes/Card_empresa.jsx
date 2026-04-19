import React from 'react'

const Card_empresa = ({texto, image}) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}
     className='w-2/3  lg:w-1/5 h-70 flex flex-col text-center  text-stroke-2 text-stroke-black rounded-xl items-center justify-center relative  bg-no-repeat bg-cover bg-center'>
                <h1 className='text-texto text-2xl'><b>{texto}</b></h1>
                <div className='absolute rounded-b-xl py-2 gap-x-5 bg-texto w-full items-center justify-center bottom-0 flex'>
                    <div className='flex flex-col text-center'>
                        <h1 className='text-black text-xl'><b>6</b></h1>
                        <h3 className='text-texto-secundario'><b>Techs</b></h3>
                    </div>
                    <div className='flex flex-col text-center'>
                        <h1 className='text-black text-xl'><b>50</b></h1>
                        <h3 className='text-texto-secundario'><b>Premios</b></h3>
                    </div>
                </div>
    </div>
  )
}
export default Card_empresa