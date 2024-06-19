import { BaseCampoDeEntrada, BasePlaceholder } from '@/styles/Base'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.pequeno};
    width: 100%;
`

export const TextArea = styled.textarea`
    ${BaseCampoDeEntrada}
    height: 172px;
    padding: 1rem;

    &::placeholder {
        ${BasePlaceholder}
    }
`
