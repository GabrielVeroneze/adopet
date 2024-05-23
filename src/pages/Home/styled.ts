import { BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import styled from 'styled-components'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.extraGrande};
    padding-left: 0;
    padding-right: 0;
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
    width: 226px;
`

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: minmax(0, 360px);
    grid-template-rows: repeat(9, 196px);
    justify-content: center;
    row-gap: 1rem;
`
