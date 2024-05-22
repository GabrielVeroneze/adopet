import { useState } from 'react'
import { BotaoVisibilidade, CampoWrapper, Entrada, Rotulo } from './styled'

interface CampoDeTextoProps {
    id: string
    type: 'text' | 'email' | 'password'
    label: string
    placeholder: string
}

const CampoDeTexto = ({ id, type, label, placeholder }: CampoDeTextoProps) => {
    const [exibirSenha, setExibirSenha] = useState<boolean>(false)

    const tipoInput = type === 'password' && exibirSenha ? 'text' : type

    return (
        <CampoWrapper>
            <Rotulo htmlFor={id}>{label}</Rotulo>
            <Entrada id={id} type={tipoInput} placeholder={placeholder} />
            {type === 'password' && (
                <BotaoVisibilidade
                    $visibilidade={exibirSenha}
                    onClick={() => setExibirSenha(!exibirSenha)}
                />
            )}
        </CampoWrapper>
    )
}

export default CampoDeTexto
