import { UseFormRegisterReturn } from 'react-hook-form'
import { transformarImagemEmUrl } from '@/utilities/transformarImagemEmUrl'
import { FotoUsuario, InputUpload, Texto, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'

interface CampoUploadFotoProps {
    imagem: FileList
    register: UseFormRegisterReturn
}

const CampoUploadFoto = ({ imagem, register }: CampoUploadFotoProps) => {
    return (
        <Wrapper>
            <LabelFormulario>Foto</LabelFormulario>
            <FotoUsuario $imagem={transformarImagemEmUrl(imagem)}>
                <InputUpload accept="image/*" {...register} />
            </FotoUsuario>
            <Texto>Clique na foto para editar</Texto>
        </Wrapper>
    )
}

export default CampoUploadFoto
