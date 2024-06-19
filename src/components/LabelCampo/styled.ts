import styled from 'styled-components'

export const Rotulo = styled.label`
    color: ${({ theme }) => theme.cores.texto.destaque};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.semibold};
    line-height: 1.5rem;
`
