import { BaseCampoDeEntrada, BasePlaceholder } from '@/styles/Base'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.pequeno};
    width: 100%;
`

export const Entrada = styled.input`
    ${BaseCampoDeEntrada}
    padding: 0.75rem 1rem;

    &::placeholder {
        ${BasePlaceholder}
    }
`
