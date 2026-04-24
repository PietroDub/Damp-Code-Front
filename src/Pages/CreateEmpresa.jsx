import Footer from "@/Componentes/Footer";
import Design from "@/Componentes/Form_cliente/Design";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CadastroContext  } from "@/Componentes/utilidades/CadastroContext";

const CreateEmpresa = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {dados, setdados} = useContext(CadastroContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const dadosBasicos  = {
      name,
      email,
      password
    };

    setdados(dadosBasicos );
    
  navigate("/cadastroEmpresa/detalhes");

  //   const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");
  
  // {message && <p>{message}</p>}
  }

  return (
    <div className="w-full grid md:flex min-h-screen bg-fundo">
      <div className="w-full flex-col h-full hidden md:flex">
        <Design 
          texto1={
            "Transforme desafios reais da sua empresa em competições de tecnologia que atraem os melhores talentos. Na DAMPCode, você cria hackathons personalizados, avalia habilidades práticas e conecta-se com desenvolvedores prontos para inovar e solucionar problemas de verdade."
          } texto2={
            "Reduza custos de recrutamento, acelere a inovação e fortaleça sua marca empregadora. Nossa plataforma oferece analytics detalhados, engajamento autêntico e um pipeline de talentos qualificados. Grandes empresas já usam a DAMPCode para identificar, testar e contratar devs que realmente fazem a diferença."
          } showCard={false} 
          />
        <div className=" hidden lg:flex flex-col items-center justify-center w-2/3 p-5 gap-5">
          <p className="text-texto">Crie uma conta de equipe parceira e tenha acesso a recursos personalizados, e muito mais!</p>
          <a className="w-full lg:w-1/2 h-20 flex items-center justify-center bg-rosa-claro rounded-full text-xl font-bold text-fundo" href="">TRABALHE CONOSCO</a>
        </div>
      </div>
      <section className="h-screen w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Link to={"/"} className='text-xl font-medium text-primaria'>voltar para a home</Link>
          <div className="flex gap-x-4">
            <h2 className="text-4xl text-primaria font-extrabold">Pressione</h2>
            <h2 className="text-4xl text-amarelo font-extrabold">Start</h2>
          </div>
          <p className="text-primaria text-xl font-medium">Preencha seus dados</p>
          <form className="flex flex-col items-center justify-center gap-y-10" onSubmit={handleSubmit}>
            <input
              placeholder="*Nome Completo"
              value={name}
              required
              minLength={8}
              maxLength={150}
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"
            />

            <input
              type="email"
              placeholder="*Melhor @Email"
              value={email}
              required
              minLength={8}
              maxLength={150}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"
            />

            <input
              type="password"
              placeholder="*Senha"
              value={password}
              required
              minLength={10}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"

            />

            <button type="submit" className="bg-rosa-claro py-5 px-10 text-xl rounded-full">
              <b>Criar Empresa</b>
            </button>

            <Link to={'/loginUser'} className="text-primaria text-xl font-medium">Já tenho conta. Fazer Login.</Link>
          </form>
        </div>
      </section>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default CreateEmpresa;