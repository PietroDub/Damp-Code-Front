import BackButton from "@/Componentes/BackButton";
import GraficoPremiacao from "@/Componentes/Graphs/GraficoPremiacao";
import GraficoStatus from "@/Componentes/Graphs/GraficoStatus";
import GraficoTecnologias from "@/Componentes/Graphs/GraficoTecnologias";
import Titulo from "@/Componentes/Titulo";
import React, { useEffect, useState } from "react";

const Ranking = () => {

  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {

    async function carregar() {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const response = await fetch(
        "https://localhost:7092/api/Hackathons"
      );

      const data = await response.json();

      const filtrados = data.filter(
        h =>
          h.empresa?.toLowerCase() ===
          user.name?.toLowerCase()
      );

      setHackathons(filtrados);
    }

    carregar();

  }, []);

  return (
    <div className="bg-fundo min-h-screen p-10">

      <div className="flex items-center gap-4 mb-10">
        <Titulo texto1={"Dashboard"} texto2={"Da empresa"}></Titulo>
        <BackButton />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="bg-fundo-claro p-5 rounded-xl">
          <GraficoStatus hackathons={hackathons} />
        </div>

        <div className="bg-fundo-claro p-5 rounded-xl lg:col-span-2">
          <GraficoPremiacao hackathons={hackathons} />
        </div>

      </div>

      <div className="bg-fundo-claro p-5 rounded-xl mt-6">
        <GraficoTecnologias hackathons={hackathons} />
      </div>

    </div>
  );
};

export default Ranking;