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
`
