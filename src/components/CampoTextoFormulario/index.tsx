import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { Entrada, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'

const CampoTextoFormulario = ({
    id,
    type,
    label,
    placeholder,
    register,
}: ICampoDeEntrada) => {
    return (
        <Wrapper>
            <LabelFormulario htmlFor={id}>{label}</LabelFormulario>
            <Entrada
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
        </Wrapper>
    )
}

export default CampoTextoFormulario
