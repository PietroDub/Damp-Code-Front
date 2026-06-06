import React from "react";
import Titulo from "../Titulo";
import handleLogoChange from "../utilidades/HandleLogoChange";

const tecnologias = ["React", "Node", "Python", "MongoDB", "SQL", "PowerBI"];
const rankings = ["Top 1", "Top 10", "Top 15", "Top 20", "Top 50", "Top 100"];
const metodos = [
  {
    id: 1,
    nome: "Avaliação IA",
    descricao: "IA avalia performance automaticamente",
  },
  {
    id: 2,
    nome: "Autodata",
    descricao: "Métricas automáticas de atividade",
  },
  {
    id: 3,
    nome: "Avaliação Manual",
    descricao: "Equipe analisa os projetos",
  },
];

const FormSection = ({
  hackathon,
  handleChange,
  setHackathon,
  handleSubmit,
  message,
}) => {
  function handleTecnologias(e) {
  const { value, checked } = e.target;

  if (checked) {
    setHackathon({
      ...hackathon,
      Tecnologias: [...(hackathon.Tecnologias || []), value],
    });
  } else {
    setHackathon({
      ...hackathon,
      Tecnologias: (hackathon.Tecnologias || []).filter(
        (tec) => tec !== value
      ),
    });
  }
}

function handleRankings(item) {
  setHackathon({
    ...hackathon,
    Ranking: item,
  });
}

function handleMetodo(item) {
  setHackathon({
    ...hackathon,
    Metodo: item.nome,
  });
}

function handleLogoChange(e) {
  const file = e.target.files[0];

  if (!file) return;

  const previewUrl = URL.createObjectURL(file);

  setHackathon({
    ...hackathon,
    Logo: previewUrl,
    logoFile: file,
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

      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
        {/* Nome */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Nome do Hackathon</label>

          <input
            type="text"
            onChange={handleChange}
            name="Titulo"
            value={hackathon.Titulo}
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
            name="Empresa"
            onChange={handleChange}
            value={hackathon.Empresa}
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

        {/* DataFim */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Data Final:</label>

          <input
            name="DataFinal"
            type="date"
            onChange={handleChange}
            value={hackathon.DataFinal}
             min={hackathon.DataCriacao}
             max="2028-12-31" 
            className="
              bg-fundo-claro
              border border-primaria
              rounded-xl
              p-4
              text-texto
            "
          />
        
        </div>

        {/* Área */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Área</label>

          <select
            name="Area"
            onChange={handleChange}
            value={hackathon.Area}
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
            name="Descricao"
            onChange={handleChange}
            required
            value={hackathon.Descricao}
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
            name="Premiacao"
            value={hackathon.Premiacao}
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
                  checked={hackathon.Tecnologias?.includes(tec) || false}
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
                    hackathon.Ranking === item
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {metodos.map((item) => (
            <div
              key={item.nome}
              className={`
  cursor-pointer
  group
  rounded-2xl
  p-6
  flex flex-col
  gap-y-4
  border
  transition-all
  duration-300

  ${
    hackathon.Metodo === item.nome
      ? `
        border-amarelo
        bg-[#241042]
        shadow-[0_0_25px_rgba(255,204,0,0.18)]
        scale-[1.02]
      `
      : `
        bg-fundo-claro
        border-primaria
        hover:border-amarelo
        hover:-translate-y-1
        hover:shadow-[0_0_20px_rgba(198,143,230,0.15)]
      `
  }
`}
              onClick={() => handleMetodo(item)}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <p className="text-amarelo font-bold text-xl ">{item.nome} </p>

                <div className="w-3 h-3 rounded-full bg-primaria group-hover:bg-amarelo transition" />
              </div>

              {/* DESCRIÇÃO */}
              <p className="text-zinc-300 text-sm leading-relaxed">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <input
            type="submit"
            value="Criar Hackathon"
            className="
      w-full
      bg-primaria
      hover:bg-primaria-hover
      text-white
      font-bold
      text-lg
      py-4
      rounded-2xl
      cursor-pointer
      transition-all
      duration-300
      hover:scale-[1.01]
      hover:shadow-[0_0_25px_rgba(108,72,197,0.35)]
    "
          />
        </div>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default FormSection;
