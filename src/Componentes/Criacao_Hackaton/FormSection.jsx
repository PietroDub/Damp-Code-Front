import React from "react";
import Titulo from "../Titulo";

const tecnologias = ["React", "Node", "Python", "MongoDB", "SQL", "PowerBI"];

const FormSection = ({ hackathon, handleChange }) => {
  return (
    <section className="w-1/2 flex flex-col gap-y-8 p-8 bg-fundo">
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
          <label className="text-amarelo font-bold">Método de Avaliação</label>

        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Premiação Total</label>

          <input
            type="number"
            name="premiacao"
            value={hackathon.premiacao}
            onChange={handleChange}
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
                <input type="checkbox" value={tec} />

                {tec}
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["Top 1", "Top 10", "Top 15", "Top 20", "Top 50", "Top 100"].map(
            (item) => (
              <button
                key={item}
                type="button"
                className="
        border border-primaria
        rounded-xl
        p-4
        text-texto
        hover:border-amarelo
        hover:bg-fundo-claro
        transition
      "
              >
                {item}
              </button>
            ),
          )}
        </div>
      </form>
    </section>
  );
};

export default FormSection;
