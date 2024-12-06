import { useCallback } from 'react'
import { useUsuario } from '@/context/usuario/useUsuario'
import { setTokenLocalStorage } from '@/utilities/tokenLocalStorage'
import { Usuario } from '@/types/Usuario'
import api from '@/services/api'

export const useAutenticacao = () => {
    const { setUsuario } = useUsuario()

    const fazerCadastro = async ({ nome, email, senha }: Usuario) => {
        const resposta = await api.post<Usuario>('/usuarios', {
            id: crypto.randomUUID(),
            nome,
            email,
            senha,
        })

        return resposta.status === 201
    }

    const fazerLogin = async ({ email, senha }: Usuario) => {
        const resposta = await api.get<Usuario[]>(
            `/usuarios?email=${email}&senha=${senha}`
        )

        const usuario = resposta.data[0]

        if (usuario) {
            setTokenLocalStorage(usuario.id!)
            setUsuario(usuario)

            return true
        }

        return false
    }

    const validarToken = useCallback(async (token: string) => {
        const resposta = await api.get<Usuario[]>(
            `/usuarios?id=${token}`
        )

        return resposta.data[0]
    }, [])

    return {
        fazerCadastro,
        fazerLogin,
        validarToken,
    }
}
