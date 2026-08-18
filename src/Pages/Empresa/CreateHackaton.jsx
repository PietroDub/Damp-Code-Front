import FormSection from '@/Componentes/Criacao_Hackaton/FormSection'
import PreviewSection from '@/Componentes/Criacao_Hackaton/PreviewSection'
import Header from '@/Componentes/Header'
import { m } from 'motion/react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

//data atual
const timeElapsed = Date.now();
const today = new Date(timeElapsed);


const CreateHackaton = () => {

const navigate = useNavigate();

const [hackathon, setHackathon] = useState({
  Titulo: "",
  Descricao: "",
  Empresa: "",
  Area: "",
  Tecnologias: [],
  Metodo: "",
  Ranking: "",
  Premiacao: 0,

  corPrincipal: "#6C48C5",
  corSecundaria: "#C68FE6",
  corFundo: "#170A36",

  Logo: "",
  logoFile: null,

  DataCriacao: today,
  DataFinal: today, // <- aqui

  status: false,
})

   const [message, setMessage] = useState("");

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

  const [loading, setLoading] = useState(false)
   async function handleSubmit(e){
    e.preventDefault();

    console.log(hackathon)

    const { logoFile, ...hackathonData } = hackathon
    
    setLoading(true) 
    try {
      console.log(hackathonData)
      const response = await fetch(
        "https://localhost:7092/api/Hackathons/register/Hackathon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(hackathonData)
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
            <FormSection handleSubmit={handleSubmit} message={message} hackathon={hackathon} handleChange={handleChange} setHackathon={setHackathon}/>
            <PreviewSection hackathon={hackathon}/>
        </section>
    </div>
  )
}

export default CreateHackaton