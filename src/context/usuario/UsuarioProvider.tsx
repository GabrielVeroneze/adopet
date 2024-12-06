import { useEffect, useState } from 'react'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { getTokenLocalStorage } from '@/utilities/tokenLocalStorage'
import { Usuario } from '@/types/Usuario'
import { UsuarioContext } from './UsuarioContext'

interface UsuarioProviderProps {
    children: React.ReactNode
}

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const { validarToken } = useAutenticacao()

    useEffect(() => {
        (async () => {
            const token = getTokenLocalStorage()
            if (token) {
                const usuario = await validarToken(token)
                if (usuario) {
                    setUsuario(usuario)
                }
            }
        })()
    }, [validarToken])

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}
