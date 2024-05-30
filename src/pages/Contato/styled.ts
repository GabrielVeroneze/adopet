import { BaseFormulario, BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'
import imagemFormaInvertida from '@/assets/images/forma-lateral-invertida.svg'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.grande};

    @media ${dispositivos.tablet} {
        background: url(${imagemFormaInvertida}) right bottom 164px / 134px
            664px no-repeat;
        gap: ${({ theme }) => theme.espacamento.enorme};
    }
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
    width: 226px;

    @media ${dispositivos.tablet} {
        width: 524px;
    }
`

export const Formulario = styled(BaseFormulario)`
    > :last-child {
        margin-top: 1rem;
    }
`
