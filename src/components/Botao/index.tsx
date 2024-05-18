import { CustomBotao } from './styled'

interface BotaoProps {
    children: string
    variante: 'normal' | 'sombra'
    onClick?: () => void
}

const Botao = ({ children, variante, onClick }: BotaoProps) => {
    return (
        <CustomBotao $variante={variante} onClick={onClick}>
            {children}
        </CustomBotao>
    )
}

export default Botao
