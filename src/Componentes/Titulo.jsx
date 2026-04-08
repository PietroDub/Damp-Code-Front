import React from 'react'

const Titulo = ({texto1, texto2 }) => {
  return (
    <div className='flex text-3xl font-bold pb-5 items-start text-start'>
            <h1 className='py-5 text-amarelo border-b-2 border-amarelo'>
            {texto1}
        </h1>
        <h1 className='py-5 pl-1 text-rosa-claro border-b-2 border-rosa-claro'>
            {texto2}
        </h1>
        </div>
  )
}

export default Titulo