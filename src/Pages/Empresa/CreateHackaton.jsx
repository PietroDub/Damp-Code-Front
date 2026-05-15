import FormSection from '@/Componentes/Criacao_Hackaton/FormSection'
import PreviewSection from '@/Componentes/Criacao_Hackaton/PreviewSection'
import Header from '@/Componentes/Header'
import React, {useState} from 'react'

const CreateHackaton = () => {
  const[hackathon, setHackathon] = useState({
      nome: "",
      empresa: "",
      corPrincipal: "",
      corSecundaria: "",
      descricao: "",
      status: "",
      area: "",
      tecnologias: "",
      // logo: ""

  })

  function handleChange(e) {
    // O handleChange é:

  // um handle genérico
  // Ele substitui:
  // handleNome
  // handleDescricao
  // handleEmpresa
  // handleArea
  // etc.
  // Tudo em UM só.
  
    const {name, value} = e.target

    setHackathon({
      ...hackathon,
       [name]: value
    })
  }
  return (
    <div className='min-h-screen bg-fundo'>
        <Header />
        <section className='w-full h-full flex'>
            <FormSection  hackathon={hackathon} handleChange={handleChange}/>
            <PreviewSection hackathon={hackathon}/>
        </section>
    </div>
  )
}

export default CreateHackaton