import { useState } from 'react'
import { ICadastroDados } from '@/types/ICadastroDados'

export const useFormularioCadastro = () => {
    const [cadastroDados, setCadastroDados] = useState<ICadastroDados>({
        email: '',
        nome: '',
        senha: '',
        confirmarSenha: '',
    })

    const handleDadosChange = (target: HTMLInputElement | HTMLTextAreaElement) => {
        setCadastroDados({
            ...cadastroDados,
            [target.name]: target.value,
        })
    }

    return {
        cadastroDados,
        handleDadosChange,
    }
}
