import { useNavigate } from 'react-router-dom'
import { jsonServerApi } from '@/services/api'
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
            alert('Erro ao cadastrar usuário')
        }
    }

    return {
        fazerCadastro,
    }
}
