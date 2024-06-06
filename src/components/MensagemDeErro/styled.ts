import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Mensagem = styled.span`
    color: ${({ theme }) => theme.cores.texto.aviso};
    font-size: ${({ theme }) => theme.fontes.tamanho.menor};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;
    margin-top: -1.125rem;

    @media ${dispositivos.desktop} {
        font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    }
`
