import { Perfil } from '@/types/Perfil'

export interface Usuario {
    id?: string
    nome?: string
    email: string
    senha: string
    perfil?: Perfil
}