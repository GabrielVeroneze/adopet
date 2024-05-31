import { BasePrincipal } from '@/styles/Base'
import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-lateral-invertida.svg'
import imagemAnimais from '@/assets/images/animais.svg'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background: url(${imagemForma}) right center no-repeat,
        url(${imagemAnimais}) bottom -14px center no-repeat;
    background-color: ${({ theme }) => theme.cores.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.grande};

    @media ${dispositivos.tablet} {
        background-position: right bottom 164px, bottom -41px center;
        background-size: 134px 664px, 338px 422px;
        gap: ${({ theme }) => theme.espacamento.enorme};
    }

    @media ${dispositivos.desktop} {
        background-size: 134px 664px, 346px 431px;
        background-position: right top 180px, bottom -22px center;
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

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.medio};
    width: 248px;

    @media ${dispositivos.tablet} {
        width: 344px;

        &:first-of-type {
            gap: ${({ theme }) => theme.espacamento.grande};
        }
    }

    @media ${dispositivos.desktop} {
        width: 488px;
    }
`

export const Titulo = styled.h1`
    color: ${({ theme }) => theme.cores.texto.claro};
    font-size: ${({ theme }) => theme.fontes.tamanho.muitoGrande};
    font-weight: ${({ theme }) => theme.fontes.peso.medium};
    line-height: 3rem;
    text-align: center;

    @media ${dispositivos.tablet} {
        font-size: ${({ theme }) => theme.fontes.tamanho.extraGrande};
    }
`

export const Texto = styled.p`
    color: ${({ theme }) => theme.cores.texto.claro};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;
    text-align: center;

    @media ${dispositivos.tablet} {
        font-size: ${({ theme }) => theme.fontes.tamanho.maior};
        line-height: 1.625rem;
    }
`
