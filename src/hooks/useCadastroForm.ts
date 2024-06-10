import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CadastroSchemaType, cadastroSchema } from '@/schemas/cadastroSchema'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { notificarUsuario } from '@/utilities/mostrarNotificacao'

export const useCadastroForm = () => {
    const { fazerCadastro } = useAutenticacao()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(cadastroSchema),
    })

    const cadastrar = async (dados: CadastroSchemaType) => {
        const estaCadastrado = await fazerCadastro(dados)

        if (estaCadastrado) {
            navigate('/login')
        } else {
            notificarUsuario('error', 'Erro ao cadastrar usuário')
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        cadastrar,
    }
}
