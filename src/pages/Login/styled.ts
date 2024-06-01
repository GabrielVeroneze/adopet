import { BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-lateral.svg'
import imagemFormaInvertida from '@/assets/images/forma-lateral-invertida.svg'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background: url(${imagemForma}) left bottom 32px no-repeat;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.enorme};

    @media ${dispositivos.tablet} {
        background: url(${imagemFormaInvertida}) right bottom 164px / 134px
            664px no-repeat;
        gap: ${({ theme }) => theme.espacamento.enorme};
    }

    @media ${dispositivos.desktop} {
        background-position: right top 180px;
        gap: ${({ theme }) => theme.espacamento.gigante};
    }
`

export const Logo = styled.img`
    @media ${dispositivos.tablet} {
        height: auto;
        width: 252px;
    }

    @media ${dispositivos.desktop} {
        width: 260px;
    }
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
`
