import api from '@/services/api'
import { Animais } from '@/types/Animais'

export async function buscarAnimais(): Promise<Animais[]> {
    try {
        const resposta = await api.get<Animais[]>('animais')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os animais.')
    }
}
