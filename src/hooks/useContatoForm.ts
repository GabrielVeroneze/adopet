import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContatoSchemaType, contatoSchema } from '@/schemas/contatoSchema'

export const useContatoForm = () => {
    const { register, handleSubmit } = useForm<ContatoSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(contatoSchema),
    })

    const enviar = (dados: ContatoSchemaType) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        enviar,
    }
}
