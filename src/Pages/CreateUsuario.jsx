import Footer from "@/Componentes/Footer";
import Design from "@/Componentes/Form_cliente/Design";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateUsuario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const user = {
      name,
      email,
      password,
      tecnologias: [] // pode mandar vazio por enquanto
    };

    try {
      const response = await fetch(
        "https://localhost:7092/api/Auth/register/participante",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar usuário");
      }

      const data = await response.json();

      console.log("Usuário criado:", data);

      setMessage("Usuário criado com sucesso!");

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error(error);
      setMessage("Erro ao criar usuário");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full grid md:flex min-h-screen bg-fundo">
      <Design />
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
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"
            />

            <input
              placeholder="*Melhor @Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"
            />

            <input
              type="password"
              placeholder="*Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"

            />

            <button type="submit" disabled={loading} className="bg-rosa-claro py-5 px-10 text-xl rounded-full">
              <b>{loading ? "Criando..." : "Criar Usuário"}</b>
            </button>

            <Link to={'/loginUser'} className="text-primaria text-xl font-medium">Já tenho conta. Fazer Login.</Link>
          </form>

          {message && <p>{message}</p>}
        </div>
      </section>
        <div className="w-full absolute bottom-0">
          <Footer />
        </div>
    </div>
  );
};

export default CreateUsuario;