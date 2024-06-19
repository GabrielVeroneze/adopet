import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { TextArea, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'

const AreaTextoFormulario = ({
    id,
    label,
    placeholder,
    register,
}: ICampoDeEntrada) => {
    return (
        <Wrapper>
            <LabelFormulario htmlFor={id}>{label}</LabelFormulario>
            <TextArea
                id={id}
                placeholder={placeholder}
                {...register}
            />
        </Wrapper>
    )
}

export default AreaTextoFormulario
