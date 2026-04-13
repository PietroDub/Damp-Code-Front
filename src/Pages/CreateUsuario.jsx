import Design from "@/Componentes/Form_cliente/Design";
import { useState } from "react";

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
    <div>
      <Design />
      <section>
        <h2>Criar Usuário</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar Usuário"}
        </button>
      </form>

      {message && <p>{message}</p>}
      </section>
    </div>
  );
};

export default CreateUsuario;