import React from "react"

const Search = () => {
  return (
    <form className="max-w-md mx-auto w-full my-5">
      <label htmlFor="search" className="sr-only">
        Buscar hackathons
      </label>

      <div className="relative">
        {/* Ícone */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-texto-secundario"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          type="search"
          id="search"
          placeholder="Buscar hackathons..."
          className="
            w-full 
            p-3 pl-10 pr-28 
            bg-fundo-claro 
            border border-fundo-claro 
            text-texto 
            rounded-lg 
            focus:outline-none 
            focus:ring-2 
            focus:ring-primaria 
            placeholder:text-texto-secundario
          "
        />

        {/* Botão */}
        <button
          type="submit"
          className="
            absolute right-1.5 bottom-1.5 
            bg-amarelo 
            text-black 
            font-medium 
            px-4 py-1.5 
            rounded-md 
            hover:brightness-110 
            transition
          "
        >
          Buscar
        </button>
      </div>
    </form>
  )
}

export default Search