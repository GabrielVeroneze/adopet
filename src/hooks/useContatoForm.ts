import { useForm } from 'react-hook-form'

export const useContatoForm = () => {
    const { register, handleSubmit } = useForm()

    const enviar = (dados) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        enviar,
    }
}
