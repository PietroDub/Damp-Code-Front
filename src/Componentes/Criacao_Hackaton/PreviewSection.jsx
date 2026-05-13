import React from 'react'

const PreviewSection = ({hackathon}) => {
  return (
    <section className='w-1/2 text-2xl text-texto'>
      <h1>{hackathon.nome}</h1>
      <p>{hackathon.descricao}</p>
    </section>
  )
}

export default PreviewSection