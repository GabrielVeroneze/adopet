import { Principal, Texto, Titulo, Wrapper } from './styled'
import Botao from '@/components/Botao'
import logo from '@/assets/images/logo-branca.svg'

const Inicial = () => {
    return (
        <Principal>
            <img src={logo} alt="Logotipo da Adopet" />
            <Wrapper>
                <Titulo>Boas-vindas!</Titulo>
                <Texto>
                    Que tal mudar sua vida adotando seu novo melhor amigo? Vem
                    com a gente!
                </Texto>
            </Wrapper>
            <Wrapper>
                <Botao variante="sombra">Já tenho conta</Botao>
                <Botao variante="sombra">Quero me cadastrar</Botao>
            </Wrapper>
        </Principal>
    )
}

export default Inicial
