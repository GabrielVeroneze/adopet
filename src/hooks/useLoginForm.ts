import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
    email: z.string(),
    senha: z.string(),
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
