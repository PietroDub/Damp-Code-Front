import {createContext, useState} from 'react'

//cria canal de dados goblal
export const CadastroContext = createContext();

//componente que envolve as rotas
export const CadastroProvider = ({children}) => {
    //dados é onde eles ficam, set pra atualizar
    const [dados, setdados] = useState({});
    return (
    // Todos os componentes dentro disso podem acessar dados e setDados
      <CadastroContext.Provider value={{ dados, setdados}}> 
        {children}
      </CadastroContext.Provider>
    )
}
