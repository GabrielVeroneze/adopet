import { BasePrincipal } from '@/styles/Base'
import styled from 'styled-components'
import imagemForma from '@/assets/images/forma-lateral-invertida.svg'
import imagemAnimais from '@/assets/images/animais.svg'

export const Principal = styled(BasePrincipal)`
    align-items: center;
    background: url(${imagemForma}) right center no-repeat,
        url(${imagemAnimais}) bottom -14px center no-repeat;
    background-color: ${({ theme }) => theme.cores.primaria};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.grande};
`

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.espacamento.medio};
    width: 248px;
`

export const Titulo = styled.h1`
    color: ${({ theme }) => theme.cores.texto.claro};
    font-size: ${({ theme }) => theme.fontes.tamanho.muitoGrande};
    font-weight: ${({ theme }) => theme.fontes.peso.medium};
    line-height: 3rem;
    text-align: center;
`

export const Texto = styled.p`
    color: ${({ theme }) => theme.cores.texto.claro};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    line-height: 1.5rem;
    text-align: center;
`
