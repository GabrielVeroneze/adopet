import { CustomLink, Imagem } from './styled'

interface IconeLinkProps {
    to: string
    src: string
    alt: string
}

const IconeLink = ({ to, src, alt }: IconeLinkProps) => {
    return (
        <CustomLink to={to}>
            <Imagem src={src} alt={alt} />
        </CustomLink>
    )
}

export default IconeLink
