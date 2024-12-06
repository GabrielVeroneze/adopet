import { useEffect, useState } from 'react'
import { jsonServerApi } from '@/services/api'
import { Animais } from '@/types/Animais'

export const useObterAnimais = () => {
    const [animaisDados, setAnimaisDados] = useState<Animais[]>([])

    useEffect(() => {
        carregarAnimais()
    }, [])

    const carregarAnimais = () => {
        jsonServerApi
            .get<Animais[]>('animais')
            .then(resposta => {
                setAnimaisDados(resposta.data)
            })
    }

    return {
        animaisDados,
    }
}
