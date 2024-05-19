import styled, { css } from 'styled-components'

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

export const BaseTextoDestaque = css`
    color: ${({ theme }) => theme.cores.texto.destaque};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.25rem;
    text-align: center;
`

export const BaseEntrada = styled.input`
    background-color: ${({ theme }) => theme.cores.fundo.secundaria};
    border-radius: 0.375rem;
    box-shadow: ${({ theme }) => theme.sombras.campoTexto.primaria};
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.menor};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    height: 40px;
    line-height: 1.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
    width: 100%;
`

export const BasePlaceholder = css`
    color: ${({ theme }) => theme.cores.texto.placeholder};
    font-size: ${({ theme }) => theme.fontes.tamanho.pequeno};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1rem;
    text-align: center;
`
