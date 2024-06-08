import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { CadastroSchemaType, cadastroSchema } from '@/schemas/cadastroSchema'

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
        const foiCriado = await fazerCadastro(dados)

        if (foiCriado) {
            navigate('/home')
        } else {
            alert('Erro ao criar conta')
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        cadastrar,
    }
}
