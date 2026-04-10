import { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const user = {
      name,
      email
    };

    try {
      const response = await fetch("https://localhost:7003/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error("Erro ao criar usuário");
      }

      const data = await response.json();

      console.log("Usuário criado:", data);

      setMessage("Usuário criado com sucesso!");

      // limpa o formulário
      setName("");
      setEmail("");

    } catch (error) {
      console.error(error);
      setMessage("Erro ao criar usuário");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Criar Usuário</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome"
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o email"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar Usuário"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}