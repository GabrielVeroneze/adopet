import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { Entrada, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'

const CampoTextoFormulario = ({ name, type, label, placeholder }: ICampoDeEntrada) => {
    return (
        <Wrapper>
            <LabelFormulario htmlFor={name}>{label}</LabelFormulario>
            <Entrada id={name} name={name} type={type} placeholder={placeholder} />
        </Wrapper>
    )
}

export default CampoTextoFormulario
