export const formatarCaracteristicas = (caracteristicas: string[]) => {
    const capitalizarPrimeiraLetra = (texto: string) => {
        return texto.charAt(0).toUpperCase() + texto.slice(1)
    }

    caracteristicas[0] = capitalizarPrimeiraLetra(caracteristicas[0])

    const fraseFormatada = caracteristicas.join(' e ')

    return fraseFormatada
}
