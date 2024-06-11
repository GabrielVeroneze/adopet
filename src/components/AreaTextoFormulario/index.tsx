import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { AreaTexto, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'

const AreaTextoFormulario = ({ id, label, placeholder }: ICampoDeEntrada) => {
    return (
        <Wrapper>
            <LabelFormulario htmlFor={id}>{label}</LabelFormulario>
            <AreaTexto id={id} placeholder={placeholder} />
        </Wrapper>
    )
}

export default AreaTextoFormulario
