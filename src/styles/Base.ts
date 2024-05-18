import styled from 'styled-components'

export const BasePrincipal = styled.main`
    min-height: 815px;
    padding: 10.5rem 1.5rem 0;
    width: 100%;
`

export const BaseBotao = styled.button`
    background-color: ${({ theme }) => theme.cores.terciaria};
    border-radius: 0.375rem;
    color: ${({ theme }) => theme.cores.texto.claro};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.semibold};
    line-height: 1.5rem;
    padding: 0.5rem;
    transition-duration: 300ms;
    transition-timing-function: ease-out;

    &:hover {
        background-color: #ff9d9e;
    }
`
