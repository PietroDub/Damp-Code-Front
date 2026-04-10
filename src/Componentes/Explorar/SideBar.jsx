import React from 'react'

const SideBar = () => {
  return (
    <section className='hidden md:flex flex-col w-3/12 bg-fundo-claro p-5 m-5 h-fit'>
        <h1 className='text-2xl text-amarelo'><b>Hackatons</b></h1>
        <nav className='flex flex-col text-texto text-lg'>
            <a href="">Front-End</a>
            <a href="">Back-End</a>
            <a href="">Banco de dados</a>
            <a href="">Desenvolvimento API</a>
            <a href="">Logica</a>
        </nav>
        <h1 className='text-2xl text-amarelo'><b>Plano</b></h1>
        <nav className='flex flex-col text-texto text-lg'>
            <a href="">Plano Básico</a>
            <a href="">Plano Regular</a>
            <a href="">Plano Avançado</a>
        </nav>
        <h1 className='text-2xl text-amarelo'><b>Empresa</b></h1>
        <nav>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="opcao1" className="w-4 h-4" />
                <label htmlFor="opcao1" className="text-texto">
                    Engenharia de Dados
                </label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="opcao1" className="w-4 h-4" />
                <label htmlFor="opcao1" className="text-texto">
                    Python
                </label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="opcao1" className="w-4 h-4" />
                <label htmlFor="opcao1" className="text-texto">
                    JavaScript
                </label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="opcao1" className="w-4 h-4" />
                <label htmlFor="opcao1" className="text-texto">
                    .Net C#
                </label>
            </div>
        </nav>
        <button className='w-full xl:w-2/3 text-lg xl:text-xl bg-amarelo mt-5 py-3 text-fundo'><b>CRIE SEU DESAFIO</b></button>
    </section>
)
}

export default SideBar