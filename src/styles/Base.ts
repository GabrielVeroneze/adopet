import { dispositivos } from '@/styles/Breakpoints'
import styled, { css } from 'styled-components'

export const BasePrincipal = styled.main`
    min-height: 815px;
    padding: 10.5rem 1.5rem 1rem;
    width: 100%;

    @media ${dispositivos.tablet} {
        min-height: 1096px;
        padding: 17.25rem 2rem 2rem;
    }

    @media ${dispositivos.desktop} {
        min-height: calc(100vh - 80px);
        padding: 12.25rem 10rem 2rem;
    }
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

    @media ${dispositivos.tablet} {
        font-size: ${({ theme }) => theme.fontes.tamanho.maior};
    }
`

export const BaseTextoDestaque = css`
    color: ${({ theme }) => theme.cores.texto.destaque};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.25rem;
    text-align: center;

    @media ${dispositivos.tablet} {
        font-size: ${({ theme }) => theme.fontes.tamanho.maior};
        line-height: 1.625rem;
    }
`

export const BaseFormulario = styled.form`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.fundo.secundaria};
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: ${({ theme }) => theme.espacamento.extraGrande} 1rem;
    width: 100%;

    @media ${dispositivos.tablet} {
        width: 524px;
    }

    @media ${dispositivos.desktop} {
        padding: ${({ theme }) => theme.espacamento.extraGrande} 1.875rem;
        width: 552px;
    }
`

export const BaseCampoDeEntrada = css`
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    border-radius: 0.375rem;
    box-shadow: ${({ theme }) => theme.sombras.campoTexto.secundaria};
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.menor};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;
`

export const BasePlaceholder = css`
    color: ${({ theme }) => theme.cores.texto.placeholder};
    font-size: ${({ theme }) => theme.fontes.tamanho.menor};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
`
