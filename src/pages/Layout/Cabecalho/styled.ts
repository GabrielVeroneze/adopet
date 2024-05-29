import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-cabecalho.svg'
import imagemPatas from '@/assets/images/patas.svg'

const exibirImagemDeFundo = (rotaAtual: string) => {
    if (rotaAtual === '/cadastro' || rotaAtual === '/login') {
        return `url(${imagemPatas}) right top no-repeat`
    }
    return 'url()'
}

export const Header = styled.header<{ $rotaAtual: string }>`
    background: ${({ $rotaAtual }) => exibirImagemDeFundo($rotaAtual)},
        url(${imagemForma}) left top no-repeat;
    height: 295px;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    @media ${dispositivos.tablet} {
        background-position: right top -19px, left -2px top;
        background-size: 224px, 561px;
        height: 470px;
    }
`

export const Navegacao = styled.nav`
    padding: 2.5rem 2.25rem 0 3rem;
    pointer-events: auto;

    @media ${dispositivos.tablet} {
        padding: 3.25rem 2.625rem 0 3rem;
    }
`

export const Lista = styled.ul`
    align-items: center;
    display: flex;
    gap: 3.625rem;
    height: 40px;

    @media ${dispositivos.tablet} {
        gap: 4.25rem;
        height: 48px;
    }
`

export const Item = styled.li`
    &:first-child {
        display: none;
    }

    &:last-child {
        margin-left: auto;
    }

    @media ${dispositivos.tablet} {
        &:first-child {
            display: block;
        }

        &:last-child {
            height: 48px;
            width: 48px;
        }
    }
`

export const Logo = styled.img`
    display: block;
    height: auto;
    width: 128px;
`
