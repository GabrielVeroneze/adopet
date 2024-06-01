import { Link as BaseLink } from 'react-router-dom'
import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Formulario = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.grande};
    width: 100%;

    @media ${dispositivos.tablet} {
        width: 344px;
    }

    @media ${dispositivos.desktop} {
        width: 552px;
    }
`

export const Link = styled(BaseLink)`
    color: ${({ theme }) => theme.cores.texto.aviso};
    display: inline-block;
    font-size: ${({ theme }) => theme.fontes.tamanho.pequeno};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;
    margin-top: -1rem;
    text-decoration: underline;

    @media ${dispositivos.tablet} {
        font-size: ${({ theme }) => theme.fontes.tamanho.menor};
    }

    @media ${dispositivos.desktop} {
        font-size: ${({ theme }) => theme.fontes.tamanho.medio};
        margin-top: -0.75rem;
    }
`
