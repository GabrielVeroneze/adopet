import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        cores: {
            primaria: string
            secundaria: string
            terciaria: string
            fundo: {
                primaria: string
                secundaria: string
            }
            texto: {
                aviso: string
                claro: string
                destaque: string
                escuro: string
                placeholder: string
            }
        }
        fontes: {
            familia: {
                primaria: string
            }
            peso: {
                normal: number
                medium: number
                semibold: number
                bold: number
            }
            tamanho: {
                muitoPequeno: string
                pequeno: string
                menor: string
                medio: string
                maior: string
                grande: string
                muitoGrande: string
                extraGrande: string
            }
        }
        sombras: {
            botao: string
            campoTexto: {
                primaria: string
                secundaria: string
            }
        }
        espacamento: {
            extraPequeno: string
            pequeno: string
            medio: string
            medioGrande: string
            grande: string
            extraGrande: string
            enorme: string
            gigante: string
        }
        largura: {
            conteudo: {
                pequeno: string
                medio: string
                grande: string
            }
        }
    }
}
