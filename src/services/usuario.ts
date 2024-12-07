import api from '@/services/api'
import { Usuario } from '@/types/Usuario'
import { Perfil } from '@/types/Perfil'

export async function atualizarPerfil(id: string, dados: Perfil): Promise<Usuario> {
    try {
        const resposta = await api.patch<Usuario>(`/usuarios/${id}`, {
            perfil: dados,
        })

        return resposta.data
    } catch {
        throw new Error('Erro ao atualizar o perfil.')
    }
}
