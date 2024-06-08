import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { CadastroSchemaType, cadastroSchema } from '@/schemas/cadastroSchema'

export const useCadastroForm = () => {
    const { fazerCadastro } = useAutenticacao()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(cadastroSchema),
    })

    const cadastrar = (dados: CadastroSchemaType) => {
        fazerCadastro(dados)
    }

    return {
        register,
        handleSubmit,
        errors,
        cadastrar,
    }
}
