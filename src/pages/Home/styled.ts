import { BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import styled from 'styled-components'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.extraGrande};
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
    width: 226px;
`

export const Lista = styled.ul`
    display: grid;
    row-gap: 1rem;
`
