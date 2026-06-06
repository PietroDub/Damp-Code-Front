import Footer from "@/Componentes/Footer";
import Design from "@/Componentes/Form_cliente/Design";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/Componentes/utilidades/AuthContext"

// 🧠 RESUMO DO FLUXO
// Usuário envia form
// impede reload
// envia POST pra API
// API responde
// verifica erro
// pega JSON
// salva no navegador


export default function Login() {
  // O useState é uma função que retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo. A sintaxe básica é:
  const { setUser } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    // impede o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // validação simples: verifica se os campos estão vazios
    if (!email || !password) {
      // mostra mensagem para o usuário
      setMessage("Preencha todos os campos");
      // interrompe a execução da função
      return;
    }

    try {
      // faz uma requisição POST para sua API de login
      const response = await fetch("https://localhost:7092/api/Auth/login", {
        method: "POST", // tipo da requisição
        headers: {
          "Content-Type": "application/json", // informa que o corpo é JSON
        },
        // envia email e senha convertidos para JSON
        body: JSON.stringify({ email, password }),
      });

      // verifica se a resposta NÃO foi bem sucedida (status diferente de 200-299)
      if (!response.ok) {
        // mostra erro para o usuário
        setMessage("Email ou senha inválidos");
        // para a execução
        return;
      }

      // converte a resposta da API (JSON) em objeto JavaScript
      const data = await response.json();

      // salva os dados do usuário no navegador (localStorage)
      // isso permite manter o usuário "logado"
      localStorage.setItem("user", JSON.stringify(data));

      setUser(data)

      // 🔥 redireciona com base no tipo de usuário
      if (data.role === "empresa") {
        // se for empresa → vai para dashboard da empresa
        navigate("/dashboard/Empresa");
      } else {
        // senão (participante) → vai para outro dashboard
        navigate("/dashboard/participante");
      }
    } catch (error) {
      // captura erros como falha de conexão com o servidor
      console.error(error);

      // mostra mensagem amigável para o usuário
      setMessage("Erro ao conectar com o servidor");
    }
  }

  return (
    <div className="w-full grid md:flex min-h-screen bg-fundo">
      <Design
        texto1={
          "Entre em sua conta e retorne a Criar ou integrar desafios, tendo todas as vantagens sem ficar para trás, voltando de onde parou e tendo acesso a novas oportunidades de criar seu portfólio."
        }
        texto2={
          "Continue evoluindo suas habilidades com novos desafios, acompanhe seu progresso em tempo real e destaque seus projetos para conquistar ainda mais oportunidades no mercado."
        
        }
      />
      <section className="h-screen w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Link to={"/"} className="text-xl font-medium text-primaria">
            voltar para a home
          </Link>
          <div className="flex gap-x-4">
            <h2 className="text-4xl text-primaria font-extrabold">Pressione</h2>
            <h2 className="text-4xl text-amarelo font-extrabold">Return</h2>
          </div>
          <p className="text-primaria text-xl font-medium">
            Preencha seus dados
          </p>
          <form
            className="flex flex-col items-center justify-center py-5 gap-y-10"
            onSubmit={handleLogin}
          >
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-primaria text-amarelo text-xl font-bold"
            />

            <button
              type="submit"
              className="cursor-pointer bg-amarelo px-10 py-5 rounded-full text-2xl"
            >
              Entrar
            </button>

            <Link
              to={"/cadastroUser"}
              className="text-primaria text-xl font-medium"
            >
              Não tenho uma conta. Cadastre-se.
            </Link>
          </form>
          {message && (
  <p className="text-danger text-lg font-semibold">
    {message}
  </p>
)}
        </div>
      </section>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}
