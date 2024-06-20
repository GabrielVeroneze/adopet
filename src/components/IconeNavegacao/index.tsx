import { CustomLink, Imagem } from './styled'

interface IconeNavegacaoProps {
    to: string
    src: string
    alt: string
}

const IconeNavegacao = ({ to, src, alt }: IconeNavegacaoProps) => {
    return (
        <CustomLink to={to}>
            <Imagem src={src} alt={alt} />
        </CustomLink>
    )
}

export default IconeNavegacao
