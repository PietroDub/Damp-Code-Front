import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackButton from "@/Componentes/BackButton";
import TitleHackaton from "@/Componentes/Criacao_Hackaton/TitleHackaton";
import SubTitleHackaton from "@/Componentes/Criacao_Hackaton/SubTitleHackaton";

const HackathonPage = () => {
  function getDescricaoMetodo(metodo) {
    switch (metodo) {
      case "Autodata":
        return "O desempenho dos participantes será avaliado automaticamente com base em métricas de atividade, entregas e engajamento na plataforma.";

      case "Avaliação IA":
        return "Uma inteligência artificial analisará os projetos enviados, considerando qualidade, inovação e aderência ao desafio.";

      case "Avaliação Manual":
        return "Os projetos serão avaliados manualmente por uma equipe especializada da empresa.";

      default:
        return metodo;
    }
  }

  const { id } = useParams();

  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {
    async function carregarHackathon() {
      const response = await fetch(
        `https://localhost:7092/api/Hackathons/${id}`,
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
    <section
      style={{ backgroundColor: hackathon.corFundo }}
      className="
      w-full
      min-h-screen
      text-white
      px-6
      lg:px-10
      py-8
      flex
      flex-col
      gap-y-10
    "
    >
      {/* VOLTAR */}
      <div className="w-fit">
        <BackButton />
      </div>

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex items-center gap-x-5 w-full lg:w-3/4">
          <img
            className="w-32 lg:w-60"
            src={hackathon.logo || "/src/assets/DAMPCode.svg"}
            alt=""
          />

          <TitleHackaton
            texto1={hackathon.titulo}
            texto2={` - ${hackathon.empresa}`}
            cor1={hackathon.corPrincipal}
            cor2={hackathon.corSecundaria}
          />
        </div>

        <button
          style={{
            backgroundColor: hackathon.corPrincipal,
          }}
          className="
          px-8
          py-3
          rounded-xl
          font-semibold
          text-lg
          shadow-lg
          hover:scale-105
          transition-all
        "
        >
          Participar
        </button>
      </div>

      {/* INFO */}
      <div className="flex flex-wrap gap-10 text-sm text-zinc-300 border-b border-zinc-700 pb-6">
        <p>
          Área:
          <b>{hackathon.area}</b>
        </p>

        <p>{hackathon.participantes || "X pessoas já entraram"}</p>

        <p>
          Premiação:
          <b> R$ {hackathon.premiacao}</b>
        </p>

        <p>
          Termina em {new Date(hackathon.dataFinal).toLocaleDateString("pt-BR")}
        </p>
      </div>

      {/* CONTEÚDO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* ESQUERDA */}
        <div className="flex flex-col gap-y-10">
          <div>
            <SubTitleHackaton
              texto1="DESCRIÇÃO"
              texto2=" DO HACKATHON"
              cor1={hackathon.corPrincipal}
              cor2={hackathon.corSecundaria}
            />

            <p className="text-zinc-300 leading-relaxed mt-3">
              {hackathon.descricao}
            </p>
          </div>

          <div>
            <SubTitleHackaton
              texto1="MÉTODO DE"
              texto2=" AVALIAÇÃO"
              cor1={hackathon.corPrincipal}
              cor2={hackathon.corSecundaria}
            />

            <p className="text-zinc-300 mt-3">
              {getDescricaoMetodo(hackathon.metodo)}
            </p>
          </div>
        </div>

        {/* DIREITA */}
        <div>
          <SubTitleHackaton
            texto1="TECNOLOGIAS"
            texto2=" UTILIZADAS"
            cor1={hackathon.corPrincipal}
            cor2={hackathon.corSecundaria}
          />

          <div className="flex flex-wrap gap-4 mt-5">
            {hackathon.tecnologias?.map((tec, index) => (
              <span
                key={index}
                style={{
                  borderColor: hackathon.corPrincipal,
                }}
                className="
                border
                px-4
                py-2
                rounded-lg
              "
              >
                {tec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonPage;
