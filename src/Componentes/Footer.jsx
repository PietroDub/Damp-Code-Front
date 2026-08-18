import React from "react"

const Footer = () => {
  return (
    <footer className="bg-fundo-claro border-t border-border mt-10">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">

        {/* TEXTO */}
        <span className="text-sm text-texto-secundario text-center md:text-left">
          &copy;{new Date().getFullYear()} <span className="text-texto font-medium">Damp Code</span>. Todos os direitos reservados.
        </span>

        {/* LINKS */}
        <ul className="flex flex-wrap justify-center md:justify-end items-center gap-4 mt-4 md:mt-0 text-sm font-medium">
          <li>
            <a href="#" className="text-texto-secundario hover:text-amarelo transition">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="text-texto-secundario hover:text-amarelo transition">
              Privacidade
            </a>
          </li>
          <li>
            <a href="#" className="text-texto-secundario hover:text-amarelo transition">
              Termos
            </a>
          </li>
          <li>
            <a href="#" className="text-texto-secundario hover:text-amarelo transition">
              Contato
            </a>
          </li>
        </ul>

      </div>
    </footer>
  )
}

export default Footer