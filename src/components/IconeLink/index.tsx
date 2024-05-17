import { CustomLink } from './styled'

interface IconeLinkProps {
    to: string
    src: string
    alt: string
}

const IconeLink = ({ to, src, alt }: IconeLinkProps) => {
    return (
        <CustomLink to={to}>
            <img src={src} alt={alt} />
        </CustomLink>
    )
}

export default IconeLink
