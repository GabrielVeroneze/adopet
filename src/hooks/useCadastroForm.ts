import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const cadastroSchema = z.object({
    email: z.string().min(3),
    nome: z.string().min(3),
    senha: z.string().min(3),
    confirmarSenha: z.string().min(3),
})

type CadastroSchemaType = z.infer<typeof cadastroSchema>

export const useCadastroForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(cadastroSchema),
    })

    const cadastrar = (dados: CadastroSchemaType) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        errors,
        cadastrar,
    }
}
