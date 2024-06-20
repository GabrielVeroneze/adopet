import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'
import icones from '@/assets/icons'

export const CampoWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.extraPequeno};
    position: relative;
    width: 100%;

    @media ${dispositivos.tablet} {
        gap: ${({ theme }) => theme.espacamento.pequeno};
    }
`

export const Rotulo = styled.label`
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;

    @media ${dispositivos.tablet} {
        font-size: ${({ theme }) => theme.fontes.tamanho.maior};
    }

    @media ${dispositivos.desktop} {
        font-weight: ${({ theme }) => theme.fontes.peso.semibold};
    }
`

export const Entrada = styled.input`
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

    &::placeholder {
        color: ${({ theme }) => theme.cores.texto.placeholder};
        font-size: ${({ theme }) => theme.fontes.tamanho.pequeno};
        font-weight: ${({ theme }) => theme.fontes.peso.normal};
    }

    @media ${dispositivos.tablet} {
        &::placeholder {
            font-size: ${({ theme }) => theme.fontes.tamanho.menor};
        }
    }

    @media ${dispositivos.desktop} {
        font-size: ${({ theme }) => theme.fontes.tamanho.medio};

        &::placeholder {
            font-size: ${({ theme }) => theme.fontes.tamanho.medio};
        }
    }
`

export const BotaoVisibilidade = styled.span<{ $visibilidade: boolean }>`
    background: ${({ $visibilidade }) =>
        $visibilidade
            ? `url(${icones.olho}) center left 0.8px no-repeat`
            : `url(${icones.olhoCortado}) center no-repeat`
    };
    bottom: 0.625rem;
    cursor: pointer;
    height: 18px;
    position: absolute;
    right: 1rem;
    width: 18px;

    @media ${dispositivos.tablet} {
        right: 1.5rem;
    }

    @media ${dispositivos.desktop} {
        right: 2rem;
    }
`
