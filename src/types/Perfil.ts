import { Base64File } from '@/types/Base64File'

export interface Perfil {
    foto: Base64File
    nome: string
    telefone: string
    cidade: string
    sobre: string
}
