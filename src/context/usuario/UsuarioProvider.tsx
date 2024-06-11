import { useEffect, useState } from 'react'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { getTokenLocalStorage } from '@/utilities/tokenLocalStorage'
import { IUsuario } from '@/types/IUsuario'
import { UsuarioContext } from './UsuarioContext'

interface UsuarioProviderProps {
    children: React.ReactNode
}

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
    const [usuario, setUsuario] = useState<IUsuario | null>(null)
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
