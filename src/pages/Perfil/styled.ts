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
        background: url(${imagemFormaInvertida}) right top 268px / 134px 664px
            no-repeat;
    }

    @media ${dispositivos.desktop} {
        background-position: right top 180px;
        gap: ${({ theme }) => theme.espacamento.extraGrande};
    }
`

export const Formulario = styled(BaseFormulario)`
    > :last-child {
        margin-top: 1rem;
    }
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
    width: 247px;

    @media ${dispositivos.tablet} {
        width: 524px;
    }

    @media ${dispositivos.desktop} {
        width: 552px;
    }
`

export const Subtitulo = styled.h2`
    align-self: center;
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.grande};
    font-weight: ${({ theme }) => theme.fontes.peso.semibold};
    line-height: 1.5rem;
`
