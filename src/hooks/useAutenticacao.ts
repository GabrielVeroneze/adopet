import { useUsuario } from '@/context/usuario/useUsuario'
import { cadastrarUsuario, logarUsuario, validarUsuario } from '@/services/autenticacao'
import { setTokenLocalStorage } from '@/utilities/tokenLocalStorage'
import { Usuario } from '@/types/Usuario'

export const useAutenticacao = () => {
    const { setUsuario } = useUsuario()

    const fazerCadastro = async ({ nome, email, senha }: Usuario) => {
        const statusCadastro = await cadastrarUsuario({ nome, email, senha })

        return statusCadastro === 201
    }

    const fazerLogin = async ({ email, senha }: Usuario) => {
        const dadosUsuario = await logarUsuario({ email, senha })

        if (dadosUsuario) {
            setTokenLocalStorage(dadosUsuario.id!)
            setUsuario(dadosUsuario)

            return true
        }

        return false
    }

    const validarToken = async (token: string) => {
        const dados = await validarUsuario(token)

        return dados
    }

    return {
        fazerCadastro,
        fazerLogin,
        validarToken,
    }
}
