import { BaseEntrada, BasePlaceholder } from '@/styles/Base'
import styled from 'styled-components'

export const CampoWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.extraPequeno};
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
