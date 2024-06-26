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
    sombras: {
        botao: '2px 2px 4px 0px #00000040',
        campoTexto: {
            primaria: '0px 2px 2px 0px #00000026',
            secundaria: '0px 2px 4px 0px #00000026',
        },
    },
    espacamento: {
        extraPequeno: '0.25rem',
        pequeno: '0.5rem',
        medio: '1rem',
        medioGrande: '1.25rem',
        grande: '1.5rem',
        extraGrande: '2rem',
        enorme: '2.5rem',
        gigante: '3rem',
    },
    largura: {
        conteudo: {
            pequeno: '312px',
            medio: '704px',
            grande: '1.120px',
        },
    },
}
