import { useCallback } from 'react'
import { jsonServerApi } from '@/services/api'
import { useUsuario } from '@/context/usuario/useUsuario'
import { setTokenLocalStorage } from '@/utilities/tokenLocalStorage'
import { IUsuario } from '@/types/IUsuario'

export const useAutenticacao = () => {
    const { setUsuario } = useUsuario()

    const fazerCadastro = async ({ nome, email, senha }: IUsuario) => {
        const resposta = await jsonServerApi.post<IUsuario>('/usuarios', {
            id: crypto.randomUUID(),
            nome,
            email,
            senha,
        })

        return resposta.status === 201
    }

    const fazerLogin = async ({ email, senha }: IUsuario) => {
        const resposta = await jsonServerApi.get<IUsuario[]>(
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
        const resposta = await jsonServerApi.get<IUsuario[]>(
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
