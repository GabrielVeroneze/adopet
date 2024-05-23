import { Link } from 'react-router-dom'
import styled from 'styled-components'
import icones from '@/assets/icons'

export const Item = styled.li`
    background-color: ${({ theme }) => theme.cores.fundo.secundaria};
    display: grid;
    gap: 0.5rem 1rem;
    grid-template-columns: repeat(2, minmax(0, 148px));
    grid-template-rows: max-content 1fr max-content max-content;
    grid-template-areas:
        'imagem nome'
        'imagem info'
        'imagem endereco'
        'imagem contato';
    padding: 1rem 1.5rem;
`

export const Imagem = styled.img`
    align-self: center;
    grid-area: imagem;
    height: auto;
    width: 100%;
`

export const Nome = styled.h2`
    color: ${({ theme }) => theme.cores.texto.destaque};
    font-size: ${({ theme }) => theme.fontes.tamanho.medio};
    font-weight: ${({ theme }) => theme.fontes.peso.semibold};
    grid-area: nome;
    line-height: 1.25rem;
`

export const Info = styled.p`
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.menor};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    grid-area: info;
    line-height: 1.25rem;
`

export const Endereco = styled.p`
    color: ${({ theme }) => theme.cores.texto.escuro};
    font-size: ${({ theme }) => theme.fontes.tamanho.pequeno};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    grid-area: endereco;
    line-height: 1rem;
`

export const Contato = styled(Link)`
    align-items: center;
    color: ${({ theme }) => theme.cores.texto.escuro};
    display: flex;
    font-size: ${({ theme }) => theme.fontes.tamanho.muitoPequeno};
    font-weight: ${({ theme }) => theme.fontes.peso.normal};
    grid-area: contato;
    line-height: 1rem;

    &::before {
        background: url(${icones.contato}) center no-repeat;
        content: '';
        display: block;
        height: 18px;
        margin-right: 0.5rem;
        width: 18px;
    }
`
