import React from "react";
import Titulo from "../Titulo";
import handleLogoChange from "../utilidades/HandleLogoChange";

const tecnologias = ["React", "Node", "Python", "MongoDB", "SQL", "PowerBI"];
const rankings = ["Top 1", "Top 10", "Top 15", "Top 20", "Top 50", "Top 100"];
const metodos = [
  {
    id: 1,
    nome: "Avaliação IA",
    descricao: "IA avalia performance automaticamente"
  },
  {
    id: 2,
    nome: "Autodata",
    descricao: "Métricas automáticas de atividade"
  },
  {
    id: 3,
    nome: "Avaliação Manual",
    descricao: "Equipe analisa os projetos"
  }
]

const FormSection = ({ hackathon, handleChange, setHackathon }) => {
  function handleTecnologias(e) {
    const { value, checked } = e.target;

    // se marcou
    if (checked) {
      setHackathon({
        ...hackathon,
        tecnologias: [...hackathon.tecnologias, value],
      });
    }

    // se desmarcou
    else {
      setHackathon({
        ...hackathon,
        tecnologias: hackathon.tecnologias.filter((tec) => tec !== value),
      });
    }
  }

  function handleRankings(item) {
    setHackathon({
      ...hackathon,
      ranking: item,
    });
  }

//   Comparação mental
// Checkbox

// O próprio HTML já guarda o valor:

// <input value="React" />

// Então:

// e.target.value

// já resolve.

// Botão

// Botão não guarda:

// Top 10
// Top 5
// Top 100

// Ele só sabe:
// "fui clicado".

// Então você injeta manualmente:

// handleRankings(item)

  return (
    <section className="w-full md:w-1/2 flex flex-col gap-y-8 p-8 bg-fundo">
      <Titulo texto1={"Criar"} texto2={"Hackathon"} />

      <form className="flex flex-col gap-y-6">
        {/* Nome */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Nome do Hackathon</label>

          <input
            type="text"
            name="nome"
            onChange={handleChange}
            value={hackathon.nome}
            required
            minLength={5}
            maxLength={100}
            placeholder="Digite o nome do hackathon"
            className="
              bg-fundo-claro
              border border-primaria
              rounded-xl
              p-4
              text-texto
              outline-none
              focus:border-amarelo
              transition
            "
          />
        </div>

        {/* Empresa */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Empresa Parceira</label>

          <input
            type="text"
            name="empresa"
            onChange={handleChange}
            value={hackathon.empresa}
            required
            minLength={2}
            maxLength={100}
            placeholder="Digite a empresa"
            className="
              bg-fundo-claro
              border border-primaria
              rounded-xl
              p-4
              text-texto
              outline-none
              focus:border-amarelo
            "
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <label className="text-amarelo font-bold">Cores do Tema</label>

          <div className="flex gap-x-6">
            <div className="flex flex-col gap-y-2">
              <span className="text-texto text-sm">Cor Principal</span>

              <input
                type="color"
                name="corPrincipal"
                value={hackathon.corPrincipal}
                onChange={handleChange}
                className="w-16 h-16 bg-transparent border-none cursor-pointer"
              />
            </div>
            {/* Secundária */}
            <div className="flex flex-col gap-y-2">
              <span className="text-texto text-sm">Cor Secundária</span>

              <input
                type="color"
                name="corSecundaria"
                value={hackathon.corSecundaria}
                onChange={handleChange}
                className="w-16 h-16 bg-transparent border-none cursor-pointer"
              />
            </div>
            {/* Fundo */}
            <div className="flex flex-col gap-y-2">
              <span className="text-texto text-sm">Cor de Fundo</span>

              <input
                type="color"
                name="corFundo"
                value={hackathon.corFundo}
                onChange={handleChange}
                className="w-16 h-16 bg-transparent border-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Upload Logo */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Logo do Hackathon</label>

          <input
            type="file"
            onChange={handleLogoChange}
            accept="image/*"
            className="
              text-texto
              file:bg-primaria
              file:border-none
              file:px-4
              file:py-2
              file:rounded-lg
              file:text-white
            "
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Status</label>

          <select
            name="status"
            onChange={handleChange}
            value={hackathon.status}
            className="
              bg-fundo-claro
              border border-primaria
              rounded-xl
              p-4
              text-texto
            "
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        {/* Área */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Área</label>

          <select
            name="area"
            onChange={handleChange}
            value={hackathon.area}
            className="
              bg-fundo-claro
              border border-primaria
              rounded-xl
              p-4
              text-texto
            "
          >
            <option value="tech">Tech Geral</option>
            <option value="web">Desenvolvimento Web</option>
            <option value="dados">Ciência de Dados</option>
            <option value="ia">Inteligência Artificial</option>
          </select>
        </div>

        {/* Descrição */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Descrição</label>

          <textarea
            name="descricao"
            onChange={handleChange}
            required
            value={hackathon.descricao}
            minLength={30}
            maxLength={500}
            placeholder="Descreva o hackathon"
            className="
              bg-fundo-claro
              border border-primaria
              rounded-xl
              p-4
              text-texto
              min-h-[180px]
              resize-none
            "
          />
        </div>


        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Premiação Total</label>

          <input
            type="number"
            name="premiacao"
            value={hackathon.premiacao}
            onChange={handleChange}
            max={100000}
            min={0}
            placeholder="10000"
            className="
      bg-fundo-claro
      border border-primaria
      rounded-xl
      p-4
      text-texto
    "
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <label className="text-amarelo font-bold">Tecnologias</label>

          <div className="grid grid-cols-2 gap-4">
            {tecnologias.map((tec) => (
              <label key={tec} className="flex items-center gap-x-2 text-texto">
                <input
                  type="checkbox"
                  value={tec}
                  //ver se está marcado e add
                  checked={hackathon.tecnologias.includes(tec) || false}
                  //altera o estado
                  onChange={handleTecnologias}
                />
                {tec}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <label className="text-amarelo font-bold">Quantos Ganham?</label>
          <div className="grid grid-cols-3 gap-4">
            {rankings.map((item) => (
              <button
                key={item}
                type="button"
                className={`
                  border rounded-xl p-4 transition
                  
                  ${
          hackathon.ranking === item
            ? "bg-amarelo border-amarelo text-fundo"
            : "border-primaria text-texto hover:border-amarelo hover:bg-fundo-claro"
        }
        `}
                onClick={() => handleRankings(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Método de Avaliação</label>
          <div className="grid grid-cols-2 gap-4 h-90">
            {metodos.map((item) => (
              <div className="bg-fundo-claro p-5 text-center">
                <p className="text-amarelo"><b>{item.nome}</b></p>
                <p className="text-white text-start">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>

      </form>
    </section>
  );
};

export default FormSection;
