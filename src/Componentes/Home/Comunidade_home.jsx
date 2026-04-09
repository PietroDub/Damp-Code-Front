import React from 'react'
import Titulo from '../Titulo'

const Comunidade_home = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
        <div className='w-9/10 text-start'>
            <Titulo texto1={"COMUNIDADE"} texto2={"ATIVA"} />
        </div>
        <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-5 w-8/10 text-texto text-center'>
            <div className='bg-fundo-claro h-50 flex flex-col justify-center p-5'>
                <h1 className='text-xl bg-fundo-claro '>Comunidades por tecnologia</h1>
                <p>Comunidades divididas por tecnologias para interagir, tirar duvidas e fazer networking, também são divididas por hackatons.</p>
            </div>
            <div className='bg-fundo-claro h-50 flex flex-col justify-center p-5'>
                <h1 className='text-xl '>Lives exclusivas</h1>
                <p>Lives exclusivas pro nível, comunidade ou hackaton, trazendo muito conteúdo, conversa e networking.</p>
            </div>
            <div className='bg-fundo-claro h-50 flex flex-col justify-center p-5'>
                <h1 className='text-xl '>Tutoriais integrados</h1>
                <p>Tutorias integrados juntos de pontos específicos dos hackatons, para guiar os candidatos a trazerem exatamento o que a empresa pede.</p>
            </div>
            <div className='bg-fundo-claro h-50 flex flex-col justify-center p-5'>
                <h1 className='text-xl '>Movimentação de pessoas</h1>
                <p>1200+ Desenvolvedores, 35 Hackathons ativos, mais de R$ 85.000 em prêmios e totais 18 Empresas parceiras.</p>
            </div>
        </div>
        <div className='w-9/10 text-center flex flex-col justify-center items-center py-5'>
            <Titulo texto1={"PARTICIPE"} texto2={"AGORA!"} />
            <h1 className='text-rosa-claro text-2xl'>NÃO DEIXE PARA DEPOIS</h1>
        </div>
    </section>
  )
}

export default Comunidade_home