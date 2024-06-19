import { Rotulo } from './styled'

interface LabelCampoProps {
    children: string
    htmlFor?: string
}

const LabelCampo = ({ children, htmlFor }: LabelCampoProps) => {
    return (
        <Rotulo htmlFor={htmlFor}>{children}</Rotulo>
    )
}

export default LabelCampo
