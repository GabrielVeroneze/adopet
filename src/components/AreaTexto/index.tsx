import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { TextArea, Wrapper } from './styled'
import LabelCampo from '@/components/LabelCampo'

const AreaTexto = ({
    id,
    label,
    placeholder,
    register,
}: ICampoDeEntrada) => {
    return (
        <Wrapper>
            <LabelCampo htmlFor={id}>{label}</LabelCampo>
            <TextArea
                id={id}
                placeholder={placeholder}
                {...register}
            />
        </Wrapper>
    )
}

export default AreaTexto
