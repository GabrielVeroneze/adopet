import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PerfilSchemaType, perfilSchema } from '@/schemas/perfilSchema'

export const usePerfilForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<PerfilSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(perfilSchema),
    })

    const salvar = (dados: PerfilSchemaType) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        watch,
        errors,
        salvar,
    }
}
