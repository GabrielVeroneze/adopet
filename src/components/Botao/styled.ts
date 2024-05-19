import { BaseBotao } from '@/styles/Base'
import styled, { css } from 'styled-components'

const BotaoNormal = css`
    width: 148px;
`

const BotaoSombra = css`
    box-shadow: ${({ theme }) => theme.sombras.botao};
    width: 182px;
`

export const CustomBotao = styled(BaseBotao)<{
    $variante: 'normal' | 'sombra'
}>`
    ${({ $variante }) => $variante === 'normal' && BotaoNormal}
    ${({ $variante }) => $variante === 'sombra' && BotaoSombra}
`
