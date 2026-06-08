import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const HackathonPage = () => {

  const { id } = useParams();

  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {

    async function carregarHackathon() {

      const response = await fetch(
        `https://localhost:7092/api/Hackathons/${id}`
      );

      const data = await response.json();

      setHackathon(data);
    }

    carregarHackathon();

  }, [id]);

  if (!hackathon) {
    return <p>Carregando...</p>;
  }

  return (
    <div>

      <h1>{hackathon.titulo}</h1>

      <p>{hackathon.descricao}</p>

      <p>{hackathon.empresa}</p>

      <img src={hackathon.logo} />

    </div>
  );
};

export default HackathonPage;