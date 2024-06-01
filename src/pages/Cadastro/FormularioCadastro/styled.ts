import { dispositivos } from '@/styles/Breakpoints'
import styled from 'styled-components'

export const Formulario = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.medioGrande};
    width: 100%;

    > :last-child {
        margin-top: 0.25rem;
    }

    @media ${dispositivos.tablet} {
        gap: ${({ theme }) => theme.espacamento.grande};
        width: 344px;

        > :last-child {
            margin-top: 1rem;
        }
    }

    @media ${dispositivos.desktop} {
        width: 552px;

        > :last-child {
            margin-top: 0.5rem;
        }
    }
`
