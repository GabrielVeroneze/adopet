import { BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-lateral.svg'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background: url(${imagemForma}) left bottom 32px no-repeat;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.enorme};
`

export const Logo = styled.img`
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
`
