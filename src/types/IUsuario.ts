import { IPerfil } from './IPerfil'

export interface IUsuario {
    id?: string
    nome?: string
    email: string
    senha: string
    perfil?: IPerfil
}
