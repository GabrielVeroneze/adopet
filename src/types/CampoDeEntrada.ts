import { UseFormRegisterReturn } from 'react-hook-form'

export interface CampoDeEntrada {
    id: string
    type?: 'email' | 'password' | 'tel' | 'text'
    label: string
    placeholder: string
    register: UseFormRegisterReturn
}
