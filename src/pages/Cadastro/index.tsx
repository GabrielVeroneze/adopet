import { Formulario, Principal, Texto, Titulo, Wrapper } from './styled'
import CampoDeTexto from '@/components/CampoDeTexto'
import Botao from '@/components/Botao'
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
            <Formulario>
                <CampoDeTexto
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Escolha seu melhor email"
                />
                <CampoDeTexto
                    id="nome"
                    type="text"
                    label="Nome"
                    placeholder="Digite seu nome completo"
                />
                <CampoDeTexto
                    id="senha"
                    type="password"
                    label="Senha"
                    placeholder="Crie uma senha"
                />
                <CampoDeTexto
                    id="confirmar-senha"
                    type="password"
                    label="Confirma sua senha"
                    placeholder="Repita a senha criada acima"
                />
                <Botao variante="normal">Cadastrar</Botao>
            </Formulario>
        </Principal>
    )
}

export default Cadastro
