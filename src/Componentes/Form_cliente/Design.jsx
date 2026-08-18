import { CardStack } from '@/components/ui/card-stack'
import React from 'react'
const cards = [
  {
    id: 1,
    empresa: "iFood",
    descricao:
      "Hackathon ATIVO promovido por uma das maiores empresas de tecnologia e delivery da América Latina. Participe de desafios reais focados em soluções inovadoras para o setor de alimentos, logística e experiência do usuário. Os 50 melhores colocados avançam para etapas exclusivas, incluindo mentorias, networking com profissionais da área e oportunidades concretas de entrevistas com a empresa.",
  },
  {
    id: 2,
    empresa: "Nubank",
    descricao:
      "Desafios desenvolvidos por uma das maiores fintechs do mundo, com foco em inovação financeira, escalabilidade e experiência digital. Resolva problemas reais enfrentados pelo mercado, concorra a premiações atrativas e ganhe visibilidade com recrutadores. Os participantes com melhor desempenho podem ser convidados para processos seletivos e oportunidades de contratação.",
  },
];

const Design = ({texto1, texto2, showCard = false}) => {
  return (
    <div className='w-full  bg-fundo p-1'>
        <div className='w-full h-full hidden md:flex flex-col items-center justify-center gap-y-5'>
          <div className='w-full text-start gap-y-1 flex flex-col items-center h-2/5'>
            <h2 className='text-3xl text-rosa-claro'>Bem vindo, <b>Vencedor</b></h2>
            <img src="/src/assets/DAMPCode.svg" className="md:max-w-5/12 pt-3" alt="damp-code-logo" />
            <h2 className='text-xl text-primaria'><b>Onde desafios reais viram conquistas reais</b></h2>
            <p className='text-lg text-texto w-4/5'>{texto1}</p>
            <p className='text-lg hidden xl:flex text-texto w-4/5'>
                {texto2}
            </p>
            <button className='text-xl bg-amarelo mt-5 py-5 w-2/3 rounded-full text-fundo'><b>NÃO PERCA OPORTUNIDADES</b></button>
          </div>
            <div className={`card w-full lg:w-2/3 h-2/5 lg:1/5 items-start ${showCard ? 'hidden lg:flex' : 'hidden'}`}>
                <CardStack items={cards}/>
            </div>
        </div>
    </div>
  )
}

export default Design