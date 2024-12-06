import { CampoDeEntrada } from '@/types/CampoDeEntrada'
import { TextArea, Wrapper } from './styled'
import LabelCampo from '@/components/LabelCampo'

const AreaTexto = ({ id, label, placeholder, register }: CampoDeEntrada) => {
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
