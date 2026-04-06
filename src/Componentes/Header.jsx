import React from 'react'
import "../style.css"

const Header = () => {
  return (
    <header className="bg-fundo-claro h-20 w-full flex items-center justify-center">
      <div className="w-11/12 lg:w-10/12 flex items-center justify-between">
        <img src="/src/assets/DAMPCode.svg" className="md:max-w-3/12 pt-5" alt="damp-code-logo" />
          {/* Modo large -> extra large */}
          <div className='hidden lg:flex w-4/6 xl:w-4/7'>
            <nav className='w-5/5 text-xl text-texto flex items-center justify-between'>
              <a href="">Explorar</a>
              <a href="">Ranking</a>
              <a href="">Para Empresas</a>
              <a href="">Entrar</a>
              <a href="">Criar Conta</a>
            </nav>
            <div className='flex h-2/3 gap-x-5 lg:pl-5'>
                <img src="/src/assets/portugues.svg" alt="" />
                <img src="/src/assets/ingles.svg" alt="" />
                <img src="/src/assets/espanhol.svg" alt="" />                
            </div>
          </div>

          {/* Modo mobile -> medium */}
          <div className='hidden md:flex lg:hidden'>
            <nav className='w-5/6 text-lg text-texto flex items-center justify-center gap-x-3'>
              <a href="">Explorar</a>
              <a href="">Ranking</a>
              <a href="">Para Empresas</a>
              <a href="">Entrar</a>
              <a href="">Criar Conta</a>
            </nav>
            <div className='flex gap-x-5 w-1/4 items-center justify-center'>
                <img className="h-3/4" src="/src/assets/portugues.svg" alt="" />
                <img className="h-3/4" src="/src/assets/ingles.svg" alt="" />
                <img className="h-3/4" src="/src/assets/espanhol.svg" alt="" />                
            </div>
          </div>
      </div>
    </header>
    
  )
}

export default Header