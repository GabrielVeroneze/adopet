import { useState } from 'react'
import { ICampoDeEntrada } from '@/types/ICampoDeEntrada'
import { BotaoVisibilidade, CampoWrapper, Entrada, Rotulo } from './styled'

const CampoAuth = ({
    id,
    type,
    label,
    placeholder,
    register,
}: ICampoDeEntrada) => {
    const [exibirSenha, setExibirSenha] = useState<boolean>(false)

    const tipoInput = type === 'password' && exibirSenha ? 'text' : type

    return (
        <CampoWrapper>
            <Rotulo htmlFor={id}>{label}</Rotulo>
            <Entrada
                id={id}
                type={tipoInput}
                placeholder={placeholder}
                {...register}
            />
            {type === 'password' && (
                <BotaoVisibilidade
                    $visibilidade={exibirSenha}
                    onClick={() => setExibirSenha(!exibirSenha)}
                />
            )}
        </CampoWrapper>
    )
}

export default CampoAuth
