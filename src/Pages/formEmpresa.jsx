import React, { useContext, useState } from "react";
import { CadastroContext } from "@/Componentes/utilidades/CadastroContext";
import Footer from "@/Componentes/Footer";
import LightPillar from '@/Componentes/LightPillar';

const EmpresaDetalhes = () => {
  // pega um contexto e usa
  const { dados } = useContext(CadastroContext);

  // novos estados
  const [cnpj, setCnpj] = useState("");
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [area, setArea] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...dados, // nome, email, senha
      cnpj,
      area,
      descricao,
      // divide e tira espaços
      tecnologias: tecnologias.split(",").map((t) => t.trim()),
    };

    try {
      const response = await fetch(
        "https://localhost:7092/api/Auth/register/empresa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Erro ao criar empresa!");
      }

      // se der certo
      // console.log("TUDO CERTO!")

      setMessage("Usuário criado com sucesso!");

      setCnpj("");
      setNomeEmpresa("");
      setArea("");
      setDescricao("");
      setTecnologias("");
    } catch (error) {
      console.error(error);
      setMessage("Erro ao criar usuário!");
    }
  }
  if (!dados?.email) {
    return <p>Volte e preencha o cadastro primeiro</p>;
  }
  return (
    
    <div className="relative w-full min-h-screen bg-fundo overflow-hidden">

  {/* 🔹 FUNDO */}
  <div className="absolute inset-0 z-0">
    <LightPillar
      topColor="#5227FF"
      bottomColor="#FF9FFC"
      intensity={1}
      rotationSpeed={0.3}
      glowAmount={0.002}
      pillarWidth={3}
      pillarHeight={0.4}
      noiseIntensity={0.5}
      pillarRotation={25}
      interactive={false}
      mixBlendMode="screen"
      quality="high"
    />
  </div>

  {/* 🔹 CONTEÚDO */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">

    <form className="flex flex-col gap-y-8 w-full max-w-xl p-10 rounded-xl border border-white/20 bg-white/10
    shadow-lg backdrop-filter backdrop-blur-md"
        onSubmit={handleSubmit}  > 
        <h2 className="text-3xl text-amarelo font-bold text-center">
          Complete seu cadastro empresarial
        </h2>

        {/* 🔹 Dados do usuário (vindos do Context) */}
        <div className="flex flex-col gap-y-4">
          <h3 className="text-xl text-primaria font-semibold">Dados Básicas</h3>

          <input
            value={dados.name || ""}
            disabled
            className="border-b-2 border-primaria text-amarelo text-lg focus:border-amarelo invalid:border-red-500"
          />

          <input
            value={dados.email || ""}
            disabled
            className="border-b-2 border-primaria text-amarelo text-lg focus:border-amarelo invalid:border-red-500"
          />
        </div>

        {/* 🔹 Dados da empresa */}
        <div className="flex flex-col gap-y-4">
          <h3 className="text-xl text-primaria font-semibold">
            Dados Avançados
          </h3>

          <input
            placeholder="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            //verificações
            required
            minLength={14}
            maxLength={18}
            pattern="\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}"
            className="border-b-2 border-primaria text-amarelo text-lg focus:border-amarelo invalid:border-red-500"
          />

          <input
            placeholder="Área de atuação (ex: Fintech, SaaS...)"
            value={area}
            required
            minLength={3}
            maxLength={50}
            onChange={(e) => setArea(e.target.value)}
            className="border-b-2 border-primaria text-amarelo text-lg focus:border-amarelo invalid:border-red-500"
          />

          <textarea
            placeholder="Descrição da empresa"
            value={descricao}
            required
            minLength={10}
            maxLength={300}
            onChange={(e) => setDescricao(e.target.value)}
            className="border-2 border-primaria text-amarelo text-lg p-2 rounded focus:border-amarelo invalid:border-red-500"
          />

          <input
            placeholder="Tecnologias (separadas por vírgula: React, .NET, Node)"
            value={tecnologias}
            required
            minLength={2}
            onChange={(e) => setTecnologias(e.target.value)}
            className="border-b-2 border-primaria text-amarelo text-lg focus:border-amarelo invalid:border-red-500"
          />
        </div>

        {/* 🔹 Botão */}
        <button
          type="submit"
          className="bg-rosa-claro py-4 rounded-full text-xl font-bold text-fundo"
        >
          Finalizar cadastro
        </button>    </form>

    {message && <p className="text-2xl text-texto">{message}</p>}

  </div>

  {/* 🔹 FOOTER */}
  <div className="relative z-10">
    <Footer />
  </div>

</div>
  );
};

export default EmpresaDetalhes;
