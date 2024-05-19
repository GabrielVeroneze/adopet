import { CampoWrapper, Entrada, Rotulo } from './styled'

interface CampoDeTextoProps {
    id: string
    type: 'text' | 'email' | 'password'
    label: string
    placeholder: string
}

const CampoDeTexto = ({ id, type, label, placeholder }: CampoDeTextoProps) => {
    return (
        <CampoWrapper>
            <Rotulo htmlFor={id}>{label}</Rotulo>
            <Entrada id={id} type={type} placeholder={placeholder} />
        </CampoWrapper>
    )
}

export default CampoDeTexto
