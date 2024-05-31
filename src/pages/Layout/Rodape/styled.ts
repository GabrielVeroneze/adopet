import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Footer = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.secundaria};
    display: flex;
    height: 104px;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.espacamento.grande};
    width: 100%;

    @media ${dispositivos.desktop} {
        height: 80px;
    }
`

export const Texto = styled.p`
    color: ${({ theme }) => theme.cores.texto.claro};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    text-align: center;
`
