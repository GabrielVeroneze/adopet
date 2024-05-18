import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-cabecalho.svg'

export const Header = styled.header`
    background-image: url(${imagemForma});
    background-repeat: no-repeat;
    height: 295px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
`

export const Navegacao = styled.nav`
    padding: 2.5rem 2.25rem 0 3rem;
`

export const Lista = styled.ul`
    align-items: center;
    display: flex;
    gap: 3.625rem;
`

export const Item = styled.li`
    &:last-child {
        margin-left: auto;
    }
`