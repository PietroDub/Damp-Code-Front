import FormSection from '@/Componentes/Criacao_Hackaton/FormSection'
import Header from '@/Componentes/Header'
import React from 'react'

const CreateHackaton = () => {
  return (
    <div className='min-h-screen bg-fundo'>
        <Header />
        <section className='w-full h-full flex'>
            <FormSection />
        </section>
    </div>
  )
}

export default CreateHackaton