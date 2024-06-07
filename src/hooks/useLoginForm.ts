import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'O campo email é obrigatório.' })
        .email({ message: 'Insira um endereço de email válido.' }),
    senha: z
        .string()
        .min(1, { message: 'O campo senha é obrigatório.' })
        .regex(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/, {
            message: 'A senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula e um número.',
        }),
})

type LoginSchemaType = z.infer<typeof loginSchema>

export const useLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema),
    })

    const fazerLogin = (dados: LoginSchemaType) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        errors,
        fazerLogin,
    }
}
