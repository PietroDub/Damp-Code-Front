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

const Design = () => {
  return (
    <div className='w-1/2  bg-fundo p-3'>
        <div className='w-full h-full hidden md:flex flex-col items-center gap-y-5'>
          <div className='w-full text-start gap-y-3 flex flex-col items-center h-3/5'>
            <h2 className='text-3xl text-rosa-claro'>Bem vindo, <b>Vencedor</b></h2>
            <img src="/src/assets/DAMPCode.svg" className="md:max-w-5/12 pt-3" alt="damp-code-logo" />
            <h2 className='text-xl text-primaria'><b>Onde desafios reais viram conquistas reais</b></h2>
            <p className='text-lg text-texto w-4/5'>Participe de hackathons criados por empresas, comunidades e especialistas, com rankings, recompensas e reconhecimento profissional.
                Na DAMPCode, você não só aprende — você resolve problemas reais, compete e interage com outros devs e constrói um portfólio que <b>importa</b>.'</p>
            <p className='text-lg hidden xl:flex text-texto w-4/5'>
                Descubra desafios alinhados às tecnologias mais demandadas do mercado, evolua com feedbacks reais e acompanhe seu progresso através de níveis, XP e conquistas. Seja você iniciante ou avançado, a DAMPCode te coloca no caminho certo para crescer, se destacar e transformar aprendizado em oportunidade.
            </p>
            <button className='text-xl bg-amarelo mt-5 py-5 w-2/3 rounded-full text-fundo'><b>NÃO PERCA OPORTUNIDADES</b></button>
          </div>
            <div className='card hidden md:flex w-full lg:w-2/3 h-2/5 items-start'>
                <CardStack items={cards}/>
            </div>
        </div>
    </div>
  )
}

export default Design