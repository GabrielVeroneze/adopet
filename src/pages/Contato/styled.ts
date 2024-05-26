import { BaseFormulario, BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import styled from 'styled-components'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.grande};
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
    width: 226px;
`

export const Formulario = styled(BaseFormulario)`
    > :last-child {
        margin-top: 1rem;
    }
`
