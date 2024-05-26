import { FotoUsuario, InputUpload, Texto, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'
import icones from '@/assets/icons'

const CampoUploadFoto = () => {
    return (
        <Wrapper>
            <LabelFormulario>Foto</LabelFormulario>
            <FotoUsuario $imagem={icones.usuario}>
                <InputUpload accept="image/*" />
            </FotoUsuario>
            <Texto>Clique na foto para editar</Texto>
        </Wrapper>
    )
}

export default CampoUploadFoto
