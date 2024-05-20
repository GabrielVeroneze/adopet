import { BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-lateral.svg'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background: url(${imagemForma}) left bottom 32px no-repeat;
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