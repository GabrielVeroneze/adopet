import { useEffect, useState } from 'react'
import { buscarAnimais } from '@/services/animais'
import { Animais } from '@/types/Animais'

export const useObterAnimais = () => {
    const [animaisDados, setAnimaisDados] = useState<Animais[]>([])

    useEffect(() => {
        carregarAnimais()
    }, [])

    const carregarAnimais = async () => {
        try {
            const animaisObtidos = await buscarAnimais()
            setAnimaisDados(animaisObtidos)
        } catch (erro) {
            if (erro instanceof Error) {
                console.log(erro.message)
            }
        }
    }

    return {
        animaisDados,
    }
}
