import { BaseBotao } from '@/styles/Base'
import { dispositivos } from '@/styles/Breakpoints'
import styled, { css } from 'styled-components'

const BotaoNormal = css`
    width: 148px;
`

const BotaoSombra = css`
    box-shadow: ${({ theme }) => theme.sombras.botao};
    width: 182px;

    @media ${dispositivos.tablet} {
        padding: 0.75rem;
        width: 344px;
    }
`

export const CustomBotao = styled(BaseBotao)<{
    $variante: 'normal' | 'sombra'
}>`
    ${({ $variante }) => $variante === 'normal' && BotaoNormal}
    ${({ $variante }) => $variante === 'sombra' && BotaoSombra}
`
