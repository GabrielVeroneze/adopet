import { useForm } from 'react-hook-form'

export const useLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onTouched',
    })

    const fazerLogin = (dados) => {
        console.log(dados)
    }

    return {
        register,
        handleSubmit,
        errors,
        fazerLogin,
    }
}
