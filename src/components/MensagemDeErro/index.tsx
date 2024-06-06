import { Mensagem } from './styled'

interface MensagemDeErroProps {
    children: React.ReactNode
}

const MensagemDeErro = ({ children }: MensagemDeErroProps) => {
    return (
        <Mensagem>{children}</Mensagem>
    )
}

export default MensagemDeErro
