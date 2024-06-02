import { BasePrincipal, BaseTextoDestaque } from '@/styles/Base'
import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'
import imagemFormaInvertida from '@/assets/images/forma-lateral-invertida.svg'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.extraGrande};
    padding-left: 0;
    padding-right: 0;

    @media ${dispositivos.tablet} {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media ${dispositivos.desktop} {
        background: url(${imagemFormaInvertida}) right top 180px / 134px 664px
            no-repeat;
        gap: ${({ theme }) => theme.espacamento.enorme};
        padding-left: 10rem;
        padding-right: 10rem;
    }
`

export const Titulo = styled.h1`
    ${BaseTextoDestaque}
    width: 226px;

    @media ${dispositivos.tablet} {
        width: 373px;
    }

    @media ${dispositivos.desktop} {
        width: 414px;
    }
`

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: minmax(0, 360px);
    grid-template-rows: repeat(9, 196px);
    justify-content: center;
    row-gap: 1rem;

    @media ${dispositivos.tablet} {
        gap: 1rem;
        grid-template-columns: repeat(2, 344px);
        grid-template-rows: repeat(5, 196px);
    }

    @media ${dispositivos.desktop} {
        grid-template-columns: repeat(3, 362px);
        grid-template-rows: repeat(3, 196px);
    }
`
