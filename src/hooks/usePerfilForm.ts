import { useForm } from 'react-hook-form'

export const usePerfilForm = () => {
    const { register, handleSubmit } = useForm()

    const salvar = (dados) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        salvar,
    }
}
