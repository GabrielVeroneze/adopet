import { useState } from 'react'
import { IUsuario } from '@/types/IUsuario'
import { UsuarioContext } from './UsuarioContext'

interface UsuarioProviderProps {
    children: React.ReactNode
}

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
    const [usuario, setUsuario] = useState<IUsuario | null>(null)

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}
