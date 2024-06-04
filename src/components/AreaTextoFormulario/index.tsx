import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { AreaTexto, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'

const AreaTextoFormulario = ({ name, label, placeholder }: ICampoDeEntrada) => {
    return (
        <Wrapper>
            <LabelFormulario htmlFor={name}>{label}</LabelFormulario>
            <AreaTexto id={name} name={name} placeholder={placeholder} />
        </Wrapper>
    )
}

export default AreaTextoFormulario
