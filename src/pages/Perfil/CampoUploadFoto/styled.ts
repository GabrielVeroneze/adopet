import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.extraPequeno};
    width: 100%;
`

export const FotoUsuario = styled.label<{ $imagem: string }>`
    align-self: center;
    background: url(${({ $imagem }) => $imagem}) center/cover no-repeat;
    border-radius: 50%;
    display: block;
    height: 80px;
    width: 80px;
`

export const InputUpload = styled.input.attrs({
    type: 'file',
})`
    display: none;
`

export const Texto = styled.p`
    color: ${({ theme }) => theme.cores.texto.aviso};
    font-size: ${({ theme }) => theme.fontes.tamanho.pequeno};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;
    text-align: center;
`
