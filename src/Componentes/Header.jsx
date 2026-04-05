import React from 'react'
import "../style.css"

const Header = () => {
  return (
    <header className="bg-fundo-claro h-20 w-full flex items-center justify-center">
      <div className="w-10/12 flex items-center justify-between">
        <img src="/src/assets/DAMPCode.svg" className="md:max-w-3/12 pt-5" alt="damp-code-logo" />
          <div className='hidden md:flex w-4/6 lg:w-3/6'>
            <nav className='w-5/5 text-xl text-texto flex justify-between'>
              <a href="">Explorar</a>
              <a href="">Ranking</a>
              <a href="">Para Empresas</a>
              <a href="">Entrar</a>
              <a href="">Criar Conta</a>
            </nav>
            <div className=''>
            </div>
          </div>
      </div>
    </header>
    
  )
}

export default Header