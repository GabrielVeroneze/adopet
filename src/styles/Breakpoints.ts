import { ITamanhos } from '@/types/ITamanhos'

const tamanhos: ITamanhos = {
    mobileSmall: '375px',
    mobile: '600px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
    desktopLarge: '1920px',
}

export const dispositivos = {
    mobileSmall: `(min-width: ${tamanhos.mobileSmall})`,
    mobile: `(min-width: ${tamanhos.mobile})`,
    tablet: `(min-width: ${tamanhos.tablet})`,
    laptop: `(min-width: ${tamanhos.laptop})`,
    desktop: `(min-width: ${tamanhos.desktop})`,
    desktopLarge: `(min-width: ${tamanhos.desktopLarge})`,
}
