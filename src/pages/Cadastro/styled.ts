import { BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import styled from 'styled-components'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.grande};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.pequeno};
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
`

export const Texto = styled.p`
    ${BaseTextoDestaque}
`

export const Formulario = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.medioGrande};
    width: 100%;

    > :last-child {
        margin-top: 0.25rem;
    }
`
