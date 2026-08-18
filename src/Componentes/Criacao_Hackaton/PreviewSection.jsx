import React from 'react'
import TitleHackaton from './TitleHackaton'
import SubTitleHackaton from './SubTitleHackaton'

const PreviewSection = ({ hackathon }) => {
  return (
    <section style={{backgroundColor: hackathon.corFundo}} className='w-1/2 min-h-screen bg-[#070012] text-white px-10 py-8 hidden md:flex flex-col gap-y-10'>

      {/* HEADER */}
      <div className='flex-col lg:flex justify-between items-start w-full'>

        <div className='flex items-center gap-x-5 w-full lg:w-3/4 pb-5'>
          <img className='w-1/3' src={hackathon.Logo || "/src/assets/DAMPCode.svg"} />

          {/* TITULO */}
          <TitleHackaton
            texto1={hackathon.Titulo}
            texto2={` - ${hackathon.Empresa}`}
            cor1={hackathon.corPrincipal}
            cor2={hackathon.corSecundaria}
          /> 

        </div>

        {/* BOTÃO */}
        <button style={{backgroundColor: hackathon.corPrincipal}} className='transition-all duration-300 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg'>
          Iniciar agora
        </button>

      </div>

      {/* INFORMAÇÕES */}
      <div className='flex flex-wrap gap-x-10 text-sm text-zinc-300 border-b border-zinc-700 pb-6'>

        <p>Área:<b>{hackathon.Area}</b></p>

        {/* PARTICIPANTES */}
        <p>
          {hackathon.participantes || 'X pessoas já entraram'}
        </p>

        {/* VAGAS */}
        <p>
          vagas em prêmios:
          <span className='font-bold text-white'>
            {hackathon.ranking}
          </span>{' '}
        </p>

        {/* premiacao */}
        <p>
          Premiação: R$<b>{hackathon.Premiacao}</b>
        </p>

        {/* DATA */}
        <p>
          Termina {hackathon.Data}
        </p>

      </div>

      {/* CONTEÚDO */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

        {/* ESQUERDA */}
        <div className='flex flex-col gap-y-10'>

          <div>
            <SubTitleHackaton
                texto1="DESCRIÇÃO "
                texto2={"DO HACKATON"}
                cor1={hackathon.corPrincipal}
                cor2={hackathon.corSecundaria}
            />

            <p className='text-zinc-300 leading-relaxed mt-3 text-base wrap-break-word max-w-full'>
              {hackathon.Descricao}
            </p>
          </div>

          <div>
            <SubTitleHackaton
                texto1="MÉTODO DE"
                texto2={"AVALIAÇÃO"}
                cor1={hackathon.corPrincipal}
                cor2={hackathon.corSecundaria}
            />

            <p className='text-zinc-300 leading-relaxed mt-3 text-base'>
              {hackathon.Metodo}
            </p>
          </div>

        </div>

        {/* DIREITA */}
        <div className='flex flex-col gap-y-10'>
          <div>
            <SubTitleHackaton
                texto1="QUAL É A SUA"
                texto2={"OPORTUNIDADE"}
                cor1={hackathon.corPrincipal}
                cor2={hackathon.corSecundaria}
            />

            <p className='text-zinc-300 leading-relaxed mt-3 text-base'>
              Nesse hackaton, está escolhido o top{' '}
              <span style={{color: hackathon.corPrincipal}} className=' font-bold'>100</span>,
              os 100 mais dedicados terão os benefícios,
              de mais de{' '}
              <span style={{color: hackathon.corPrincipal}} className=' font-bold'>
                R$ 10000
              </span>{' '}
              distribuídos, e oportunidades na empresa.
            </p>
          </div>

          <div>

            <SubTitleHackaton
                texto1="LISTA DE"
                texto2={"TECNOLOGIAS"}
                cor1={hackathon.corPrincipal}
                cor2={hackathon.corSecundaria}
            />

            <div className='flex flex-wrap items-center gap-x-5 mt-5'>

              {hackathon.tecnologias?.map((tec, index) => (
                // <img
                //   key={index}
                //   src={tec}
                //   alt="Tecnologia"
                //   className='w-10 h-10 object-contain'
                // />
                <p key={index}>{tec}</p>
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div style={{color: hackathon.corPrincipal}} className='hidden lg:flex align-top gap-x-8 font-semibold text-xl p-10 w-1/2'>

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