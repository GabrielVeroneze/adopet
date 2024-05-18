import { BaseBotao } from '@/styles/Base'
import styled, { css } from 'styled-components'

export const CustomBotao = styled(BaseBotao)<{
    $variante: 'normal' | 'sombra'
}>`
    ${({ $variante }) =>
        $variante === 'normal' && css`
            width: 148px;
        `
    }
    ${({ $variante }) =>
        $variante === 'sombra' && css`
            box-shadow: ${({ theme }) => theme.sombras.botao};
            width: 182px;
        `
    }
`
