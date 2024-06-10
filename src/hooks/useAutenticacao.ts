import { jsonServerApi } from '@/services/api'
import { IUsuario } from '@/types/IUsuario'

export const useAutenticacao = () => {

    const fazerCadastro = async ({ nome, email, senha }: IUsuario) => {
        const resposta = await jsonServerApi.post<IUsuario>('/usuarios', {
            nome,
            email,
            senha,
        })

        return resposta.status === 201
    }

        }
    }

    return {
        fazerCadastro,
    }
}
