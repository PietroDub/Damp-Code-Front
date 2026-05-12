import React from "react";
import Titulo from "../Titulo";

const FormSection = ({ hackathon, setHackathon }) => {
  // O handleChange é:

  // um handle genérico
  // Ele substitui:
  // handleNome
  // handleDescricao
  // handleEmpresa
  // handleArea
  // etc.
  // Tudo em UM só.
  function handleChange(e) {
    const { name, value } = e.target;

    setHackathon({
      ...hackathon,
      [name]: value,
    });
  }
  return (
    <section className="w-full flex flex-col gap-y-8 p-8 bg-fundo">
      <Titulo texto1={"Criar"} texto2={"Hackathon"} />

      <form className="flex flex-col gap-y-6">
        {/* Nome */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Nome do Hackathon</label>

          <input
            type="text"
            name="nome"
            onChange={handleChange}
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

        {/* Status */}
        <div className="flex flex-col gap-y-2">
          <label className="text-amarelo font-bold">Status</label>

          <select
            name="status"
            onChange={handleChange}
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
            minLength={30}
            maxLength={1000}
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
      </form>
    </section>
  );
};

export default FormSection;
