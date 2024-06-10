import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchemaType, loginSchema } from '@/schemas/loginSchema'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { notificarUsuario } from '@/utilities/mostrarNotificacao'

export const useLoginForm = () => {
    const { fazerLogin } = useAutenticacao()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema),
    })

    const logar = async (dados: LoginSchemaType) => {
        const estaLogado = await fazerLogin(dados)

        if (estaLogado) {
            navigate('/home')
        } else {
            notificarUsuario('error', 'E-mail ou senha inválido')
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        logar,
    }
}
