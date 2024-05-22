import { BaseEntrada, BasePlaceholder } from '@/styles/Base'
import styled from 'styled-components'
import icones from '@/assets/icons'

export const CampoWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.extraPequeno};
    position: relative;
    width: 100%;
`

export const Rotulo = styled.label`
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;
`

export const Entrada = styled(BaseEntrada)`
    &::placeholder {
        ${BasePlaceholder}
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
`
