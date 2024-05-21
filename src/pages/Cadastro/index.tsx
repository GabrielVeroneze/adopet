import { Principal, Texto, Titulo, Wrapper } from './styled'
import FormularioCadastro from './FormularioCadastro'
import logo from '@/assets/images/logo-azul.svg'

const Cadastro = () => {
    return (
        <Principal>
            <img src={logo} alt="Logotipo da Adopet" />
            <Wrapper>
                <Titulo>Ainda não tem cadastro?</Titulo>
                <Texto>
                    Então, antes de buscar seu melhor amigo, precisamos de
                    alguns dados:
                </Texto>
            </Wrapper>
            <FormularioCadastro />
        </Principal>
    )
}

export default Cadastro
