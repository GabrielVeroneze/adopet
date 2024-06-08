import { jsonServerApi } from '@/services/api'
import { IUsuario } from '@/types/IUsuario'

export const useAutenticar = () => {
    const fazerCadastro = async ({ nome, email, senha }: IUsuario) => {
        const resposta = await jsonServerApi.post('/usuarios', {
            nome,
            email,
            senha,
        })

        return resposta.status === 201
    }

    return {
        fazerCadastro,
    }
}
