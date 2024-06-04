import { useEffect, useState } from 'react'
import { jsonServerApi } from '@/services/api'
import { IAnimais } from '@/types/IAnimais'

export const useObterAnimais = () => {
    const [animaisDados, setAnimaisDados] = useState<IAnimais[]>([])

    useEffect(() => {
        carregarAnimais()
    }, [])

    const carregarAnimais = () => {
        jsonServerApi
            .get<IAnimais[]>('animais')
            .then(resposta => {
                setAnimaisDados(resposta.data)
            })
    }

    return {
        animaisDados,
    }
}
