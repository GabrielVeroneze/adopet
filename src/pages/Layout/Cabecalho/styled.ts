import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-cabecalho.svg'
import imagemPatas from '@/assets/images/patas.svg'

const exibirImagemDeFundo = (rotaAtual: string) => {
    if (rotaAtual === '/cadastro' || rotaAtual === '/login') {
        return `url(${imagemPatas}) right top no-repeat,`
    }
}

export const Header = styled.header<{ $rotaAtual: string }>`
    background: ${({ $rotaAtual }) => exibirImagemDeFundo($rotaAtual)}
        url(${imagemForma}) left top no-repeat;
    height: 295px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`

export const Navegacao = styled.nav`
    padding: 2.5rem 2.25rem 0 3rem;
`

export const Lista = styled.ul`
    align-items: center;
    display: flex;
    gap: 3.625rem;
    height: 40px;
`

export const Item = styled.li`
    &:last-child {
        margin-left: auto;
    }
`
