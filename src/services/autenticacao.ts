import api from '@/services/api'
import { Usuario } from '@/types/Usuario'

export async function cadastrarUsuario({ nome, email, senha }: Usuario): Promise<void> {
    try {
        await api.post<Usuario>('/usuarios', {
            id: crypto.randomUUID(),
            nome,
            email,
            senha,
        })
    } catch {
        throw new Error('Erro ao cadastrar o usuário.')
    }
}

export async function logarUsuario({ email, senha }: Usuario): Promise<Usuario> {
    try {
        const resposta = await api.get<Usuario[]>(
            `/usuarios?email=${email}&senha=${senha}`
        )

        return resposta.data[0]
    } catch {
        throw new Error('Erro ao realizar o login.')
    }
}

export async function validarUsuario(token: string): Promise<Usuario> {
    try {
        const resposta = await api.get<Usuario[]>(
            `/usuarios?id=${token}`
        )

        return resposta.data[0]
    } catch {
        throw new Error('Erro ao validar o token.')
    }
}
