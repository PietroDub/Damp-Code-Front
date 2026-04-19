import Footer from '@/Componentes/Footer';
import Design from '@/Componentes/Form_cliente/Design';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



async function handleLogin(e){
    // evite q a página recarregue
    console.log("clicou");
    e.preventDefault();

    const response = await fetch("https://localhost:7092/api/Auth/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json" 
        }, 
            //transforma em json  email = "teste@email.com" -> "email": "teste@email.com"
            body: JSON.stringify({ email, password})
    });

    if (!response.ok) {
        alert("Login inválido");
        return;
    }

    const data = await response.json();

    console.log("Usuário logado:", data);

    // salvar no localStorage (navegador)
    localStorage.setItem("user", JSON.stringify(data))
}
  return (
    <div className='w-full grid md:flex min-h-screen bg-fundo'>
      <Design />
      <section className='h-screen w-full md:w-1/2 flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center">
          <Link to={"/"} className='text-xl font-medium text-primaria'>voltar para a home</Link>
          <div className='flex gap-x-4'>
            <h2 className='text-4xl text-primaria font-extrabold'>Pressione</h2>
            <h2 className='text-4xl text-amarelo font-extrabold'>Return</h2>
          </div>
          <p className="text-primaria text-xl font-medium">Preencha seus dados</p>
      <form className='flex flex-col items-center justify-center py-5 gap-y-10' onSubmit={handleLogin}>
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

      <button className='cursor-pointer' type="submit">Entrar</button>

      <Link to={'/cadastroUser'} className="text-primaria text-xl font-medium">Não tenho uma conta. Cadastre-se.</Link>
    </form>
        </div>
      </section>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  )
}