import { useState } from 'react'
import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { BotaoVisibilidade, CampoWrapper, Entrada, Rotulo } from './styled'

const CampoDeTexto = ({ name, type, label, placeholder }: ICampoDeEntrada) => {
    const [exibirSenha, setExibirSenha] = useState<boolean>(false)

    const tipoInput = type === 'password' && exibirSenha ? 'text' : type

    return (
        <CampoWrapper>
            <Rotulo htmlFor={name}>{label}</Rotulo>
            <Entrada id={name} name={name} type={tipoInput} placeholder={placeholder} />
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
