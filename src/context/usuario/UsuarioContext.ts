import { createContext } from 'react'
import { Usuario } from '@/types/Usuario'

interface UsuarioContextType {
    usuario: Usuario | null
    setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>
}

const defaultValue: UsuarioContextType = {
    usuario: null,
    setUsuario: () => {},
}

export const UsuarioContext = createContext<UsuarioContextType>(defaultValue)
UsuarioContext.displayName = 'Usuário'
