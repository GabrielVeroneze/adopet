import { useEffect, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { converterImagemEmBase64 } from '@/utilities/converterImagem'
import { FotoUsuario, InputUpload, Texto, Wrapper } from './styled'
import LabelFormulario from '@/components/LabelFormulario'
import icones from '@/assets/icons'

interface CampoUploadFotoProps {
    imagem: FileList
    register: UseFormRegisterReturn
}

const CampoUploadFoto = ({ imagem, register }: CampoUploadFotoProps) => {
    const [imagemUrl, setImagemUrl] = useState<string>('')

    useEffect(() => {
        const processarImagem = async () => {
            if (imagem.length > 0) {
                const { base64 } = await converterImagemEmBase64(imagem)
                setImagemUrl(base64)
            } else {
                setImagemUrl(icones.usuario)
            }
        }
        processarImagem()
    }, [imagem])

    return (
        <Wrapper>
            <LabelFormulario>Foto</LabelFormulario>
            <FotoUsuario $imagem={imagemUrl}>
                <InputUpload accept="image/*" {...register} />
            </FotoUsuario>
            <Texto>Clique na foto para editar</Texto>
        </Wrapper>
    )
}

export default CampoUploadFoto
