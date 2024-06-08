import { useNavigate } from 'react-router-dom'
import { jsonServerApi } from '@/services/api'
import { notificarUsuario } from '@/utilities/mostrarNotificacao'
import { IUsuario } from '@/types/IUsuario'

export const useAutenticacao = () => {
    const navigate = useNavigate()

    const fazerCadastro = async ({ nome, email, senha }: IUsuario) => {
        try {
            const resposta = await jsonServerApi.post('/usuarios', {
                nome,
                email,
                senha,
            })

            if (resposta.status === 201) {
                navigate('/home')
            }
        } catch (error) {
            notificarUsuario('error', 'Erro ao cadastrar usuário')
        }
    }

    return {
        fazerCadastro,
    }
}
