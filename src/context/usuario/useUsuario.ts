import { useContext } from 'react'
import { UsuarioContext } from './UsuarioContext'

export const useUsuario = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)

    return {
        usuario,
        setUsuario,
    }
}
