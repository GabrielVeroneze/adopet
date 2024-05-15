import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    cores: {
        primaria: '#3772FF',
        secundaria: '#36D6AD',
        terciaria: '#FC7071',
        fundo: {
            primaria: '#FFFFFF',
            secundaria: '#F6F6F6',
        },
        texto: {
            aviso: '#FC7071',
            claro: '#FFFFFF',
            destaque: '#3772FF',
            escuro: '#737380',
            placeholder: '#BCBCBC',
        },
    },
    fontes: {
        familia: {
            primaria: 'Poppins',
        },
        peso: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        tamanho: {
            muitoPequeno: '0.625rem',
            pequeno: '0.75rem',
            menor: '0.875rem',
            medio: '1rem',
            maior: '1.125rem',
            grande: '1.375rem',
            muitoGrande: '1.625rem',
            extraGrande: '1.75rem',
        },
    },
}
