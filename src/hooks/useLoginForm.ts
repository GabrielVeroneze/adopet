import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchemaType, loginSchema } from '@/schemas/loginSchema'

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
