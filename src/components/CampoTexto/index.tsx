import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { Entrada, Wrapper } from './styled'
import LabelCampo from '@/components/LabelCampo'

const CampoTexto = ({
    id,
    type,
    label,
    placeholder,
    register,
}: ICampoDeEntrada) => {
    return (
        <Wrapper>
            <LabelCampo htmlFor={id}>{label}</LabelCampo>
            <Entrada
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
        </Wrapper>
    )
}

export default CampoTexto
