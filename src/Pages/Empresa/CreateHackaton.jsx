import FormSection from '@/Componentes/Criacao_Hackaton/FormSection'
import PreviewSection from '@/Componentes/Criacao_Hackaton/PreviewSection'
import Header from '@/Componentes/Header'
import { m } from 'motion/react'
import React, {useState} from 'react'

const CreateHackaton = () => {
  const[hackathon, setHackathon] = useState({
      nome: "",
      empresa: "",
      corPrincipal: "#6C48C5",
      corSecundaria: "#C68FE6",
      corFundo: "#170A36",
      descricao: "",
      premiacao: "",
      status: "",
      area: "",
      tecnologias:[],
      ranking: "",
      logo: "",
      logoFile: null 

  })

  async function handleChange(e) {
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

   async function handleSubmit(e){
    e.preventDefault();

      try {
      const response = await fetch(
        "https://localhost:7092/api/Auth/register/participante",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(hackathon)
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar Hackathon");
      }

      const data = await response.json();

      console.log("Hackathon criado:", data);

      setMessage("Hackathon criado com sucesso!");

      navigate("/dashboard/Empresa");

    } catch (error) {
      console.error(error);
      setMessage("Erro ao criar Hackathon");
    } finally {
      setLoading(false);
    }
    }
  return (
    <div className='min-h-screen bg-fundo'>
        <Header />
        <section className='w-full h-full flex'>
            <FormSection handleSubmit={handleSubmit}  hackathon={hackathon} handleChange={handleChange} setHackathon={setHackathon}/>
            <PreviewSection hackathon={hackathon}/>
        </section>
    </div>
  )
}

export default CreateHackaton