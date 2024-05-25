import { Rotulo } from './styled'

interface LabelFormularioProps {
    children: string
    htmlFor?: string
}

const LabelFormulario = ({ children, htmlFor }: LabelFormularioProps) => {
    return (
        <Rotulo htmlFor={htmlFor}>{children}</Rotulo>
    )
}

export default LabelFormulario
