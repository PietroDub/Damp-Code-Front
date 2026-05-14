import React from 'react'
import TitleHackaton from './TitleHackaton'
import SubTitleHackaton from './SubTitleHackaton'

const PreviewSection = ({ hackathon }) => {
  return (
    <section className='w-1/2 min-h-screen bg-[#070012] text-white px-10 py-8 flex flex-col gap-y-10'>

      {/* HEADER */}
      <div className='flex justify-between items-start w-full'>

        <div className='flex items-center gap-x-5 w-3/4'>

          {/* LOGO */}
          <div className='w-24 h-24 rounded-full overflow-hidden flex items-center justify-center'>
            <img
              src={hackathon.logo}
              alt="Logo"
              className='w-full h-full object-cover'
            />
          </div>

          {/* TITULO */}
          <TitleHackaton
            texto1={hackathon.nome}
            texto2={` - ${hackathon.empresa}`}
            cor1="#FFFFFF"
            cor2="#FF003C"
          />

        </div>

        {/* BOTÃO */}
        <button className='bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg'>
          Iniciar agora
        </button>

      </div>

      {/* INFORMAÇÕES */}
      <div className='flex gap-x-10 text-sm text-zinc-300 border-b border-zinc-700 pb-6'>

        <p>{hackathon.area}</p>

        {/* PARTICIPANTES */}
        <p>
          {hackathon.participantes || '2001 pessoas já entraram'}
        </p>

        {/* VAGAS */}
        <p>
          <span className='font-bold text-white'>
            {hackathon.vagas}
          </span>{' '}
          vagas em prêmios
        </p>

        {/* DATA */}
        <p>
          Termina {hackathon.data}
        </p>

      </div>

      {/* CONTEÚDO */}
      <div className='grid grid-cols-2 gap-16'>

        {/* ESQUERDA */}
        <div className='flex flex-col gap-y-10'>

          <div>
            <SubTitleHackaton
              texto="DESCRIÇÃO DO HACKATON"
              cor="#FF003C"
            />

            <p className='text-zinc-300 leading-relaxed mt-3 text-base'>
              {hackathon.descricao}
            </p>
          </div>

          <div>
            <SubTitleHackaton
              texto="MÉTODO DE AVALIAÇÃO"
              cor="#FF003C"
            />

            <p className='text-zinc-300 leading-relaxed mt-3 text-base'>
              {hackathon.metodo}
            </p>
          </div>

        </div>

        {/* DIREITA */}
        <div className='flex flex-col gap-y-10'>

          <div>
            <SubTitleHackaton
              texto="QUAL É A SUA OPORTUNIDADE?"
              cor="#FF003C"
            />

            <p className='text-zinc-300 leading-relaxed mt-3 text-base'>
              Nesse hackaton, está escolhido o top{' '}
              <span className='text-red-500 font-bold'>100</span>,
              os 100 mais dedicados terão os benefícios,
              de mais de{' '}
              <span className='text-red-500 font-bold'>
                R$ 10000
              </span>{' '}
              distribuídos, e oportunidades na empresa.
            </p>
          </div>

          <div>
            <SubTitleHackaton
              texto="LISTA DE TECNOLOGIAS"
              cor="#FF003C"
            />

            <div className='flex items-center gap-x-5 mt-5'>

              {hackathon.tecnologias?.map((tec, index) => (
                <img
                  key={index}
                  src={tec}
                  alt="Tecnologia"
                  className='w-10 h-10 object-contain'
                />
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className='flex gap-x-8 text-red-500 font-semibold text-xl pt-10'>

        <button className='hover:text-white transition-all'>
          Desafio
        </button>

        <button className='hover:text-white transition-all'>
          Ranking
        </button>

        <button className='hover:text-white transition-all'>
          Comunidade
        </button>

        <button className='hover:text-white transition-all'>
          Conteúdos
        </button>

        <button className='hover:text-white transition-all'>
          Certificado
        </button>

      </div>

    </section>
  )
}

export default PreviewSection