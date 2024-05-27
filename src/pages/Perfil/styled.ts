import { BaseFormulario, BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import styled from 'styled-components'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.grande};
`

export const Formulario = styled(BaseFormulario)`
    > :last-child {
        margin-top: 1rem;
    }
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
    width: 247px;
`

export const Subtitulo = styled.h2`
    align-self: center;
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.grande};
    font-weight: ${({ theme }) => theme.fontes.peso.semibold};
    line-height: 1.5rem;
`
