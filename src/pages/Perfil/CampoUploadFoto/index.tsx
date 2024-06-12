import { UseFormRegisterReturn } from 'react-hook-form'
import { FotoUsuario, InputUpload, Texto, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'
import icones from '@/assets/icons'

interface CampoUploadFotoProps {
    register: UseFormRegisterReturn
}

const CampoUploadFoto = ({ register }: CampoUploadFotoProps) => {
    return (
        <Wrapper>
            <LabelFormulario>Foto</LabelFormulario>
            <FotoUsuario $imagem={icones.usuario}>
                <InputUpload accept="image/*" {...register} />
            </FotoUsuario>
            <Texto>Clique na foto para editar</Texto>
        </Wrapper>
    )
}

export default CampoUploadFoto
