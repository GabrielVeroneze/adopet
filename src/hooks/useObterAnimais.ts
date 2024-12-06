import { useEffect, useState } from 'react'
import { Animais } from '@/types/Animais'
import api from '@/services/api'

export const useObterAnimais = () => {
    const [animaisDados, setAnimaisDados] = useState<Animais[]>([])

    useEffect(() => {
        carregarAnimais()
    }, [])

    const carregarAnimais = () => {
        api
            .get<Animais[]>('animais')
            .then(resposta => {
                setAnimaisDados(resposta.data)
            })
    }

    return {
        animaisDados,
    }
}
