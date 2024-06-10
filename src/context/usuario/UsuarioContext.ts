import { createContext } from 'react'
import { IUsuario } from '@/types/IUsuario'

interface UsuarioContextType {
    usuario: IUsuario | null
    setUsuario: React.Dispatch<React.SetStateAction<IUsuario | null>>
}

const defaultValue: UsuarioContextType = {
    usuario: null,
    setUsuario: () => {},
}

export const UsuarioContext = createContext<UsuarioContextType>(defaultValue)
UsuarioContext.displayName = 'Usuário'
