import React, { useState } from 'react'
import "../style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'


const Header = () => {
  // usestate (é um estado, ou aberto ou false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-fundo-claro h-auto w-full flex items-center justify-center">
      <div className="w-11/12 lg:w-10/12 flex items-center justify-between">
        <img src="/src/assets/DAMPCode.svg" className="md:max-w-3/12 pt-5" alt="damp-code-logo" />
          {/* Modo large -> extra large */}
          <div className='hidden lg:flex w-4/6 xl:w-4/7'>
            <nav className='w-5/5 text-xl text-texto flex items-center justify-between'>
              <Link to={'/explore'}>Explore</Link>
              <a href="">Ranking</a>
              <a href="">Para Empresas</a>
              <Link to={'/loginUser'}>Entrar</Link>
              <Link to={'/cadastroUser'}>Criar Conta</Link>
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
              <Link to={'/explore'} className='hover:text-primaria-hover'>Explorar</Link>
              <a className='hover:text-primaria-hover' href="">Ranking</a>
              <a className='hover:text-primaria-hover' href="">Para Empresas</a>
              <Link className='hover:text-primaria-hover' to={'/loginUser'}>Entrar</Link>
              <Link className='hover:text-primaria-hover' to={'/cadastroUser'}>Criar Conta</Link>
            </nav>
            <div className='flex gap-x-5 w-1/4 items-center justify-center'>
                <img className="h-3/4" src="/src/assets/portugues.svg" alt="" />
                <img className="h-3/4" src="/src/assets/ingles.svg" alt="" />
                <img className="h-3/4" src="/src/assets/espanhol.svg" alt="" />                
            </div>
          </div>
      </div>

    <div className='flex md:hidden items-center justify-center'>
      <FontAwesomeIcon icon={faBars} onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-amarelo text-2xl"/>
      {/* {``} para estilizar e usar lógica simultâneamente */}
    </div>
      <div className={`absolute z-10 top-20 md:hidden w-full bg-fundo-claro flex flex-col
        items-center justify-center gap-5 text-xl font-semibold transform transition-transform
        ${isMenuOpen ? "opacity-100" : "opacity-0"}`} 
        style={{transition:"transform 0.3s ease, opacity 0.3s ease"}}>
          <Link to={'/explore'}
           className='w-full p-4 text-center text-texto
           hover:text-primaria-hover transition-all cursor-pointer'> Explorar </Link>
           <li className='w-full p-4 text-center text-texto
           hover:text-primaria-hover transition-all cursor-pointer'> Ranking </li>
           <li className='w-full p-4 text-center text-texto
           hover:text-primaria-hover transition-all cursor-pointer'> Para Empresas </li>
           <Link to={'/loginUser'} className='w-full p-4 text-center text-texto
           hover:text-primaria-hover transition-all cursor-pointer'>Entrar</Link>
           <Link to={'/cadastroUser'} className='w-full p-4 text-center text-texto
           hover:text-primaria-hover transition-all cursor-pointer'> Criar Conta </Link>
      </div>
    </header>
    
  )
}

export default Header