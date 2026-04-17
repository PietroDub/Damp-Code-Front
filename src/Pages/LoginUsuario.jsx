import React from 'react'
import { useState } from 'react'

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
    <form onSubmit={handleLogin}>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  )
}