import React from "react";
import { useNavigate } from "react-router-dom";

const CardHackathon = ({ hackathon }) => {
  const navigate = useNavigate();
  console.log(hackathon);
  return (
    <div
      style={{
        backgroundImage: `url(${hackathon.logo})`,
      }}
      className="
    w-2/3
    lg:w-1/5
    h-70
    flex
    flex-col
    text-center
    rounded-xl
    items-center
    justify-center
    relative
    overflow-hidden
    bg-no-repeat
    bg-cover
    bg-center
  "
    >
      <h1 className="text-texto text-2xl z-10">
        <b>{hackathon.titulo}</b>
      </h1>

      <h2 className="text-texto z-10">{hackathon.empresa}</h2>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>
      <div className="absolute rounded-b-xl py-2 gap-x-5 bg-texto w-full items-center justify-center bottom-0 flex">
        <div className="flex flex-col text-center">
          <h1 className="text-black text-xl">
            <b>{hackathon.tecnologias?.length || 0}</b>
          </h1>

          <h3 className="text-texto-secundario">
            <b>Techs</b>
          </h3>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="text-black text-xl">
            <b>R$ {hackathon.premiacao}</b>
          </h1>

          <h3 className="text-texto-secundario">
            <b>Prêmio</b>
          </h3>
        </div>

        <button onClick={() => navigate(`/hackathon/${hackathon.hackathonId}`)}>
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default CardHackathon;
