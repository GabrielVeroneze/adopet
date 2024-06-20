import { useLocation } from 'react-router-dom'
import { useUsuario } from '@/context/usuario/useUsuario'
import { Header, Item, Lista, Logo, Navegacao } from './styled'
import IconeNavegacao from '@/components/IconeNavegacao'
import logo from '@/assets/images/logo-cabecalho.svg'
import icones from '@/assets/icons'

const Cabecalho = () => {
    const { usuario } = useUsuario()
    const { pathname } = useLocation()

    const fotoUsuario = usuario?.perfil?.foto.base64 || icones.usuario

    const deveOcultarPerfil = ['/', '/cadastro', '/login'].includes(pathname)

    return (
        <Header $rotaAtual={pathname}>
            <Navegacao>
                <Lista>
                    <Item>
                        <Logo src={logo} alt="Logotipo da Adopet" />
                    </Item>
                    <Item>
                        <IconeNavegacao
                            to="/home"
                            src={icones.casa}
                            alt="Ícone de uma casa, representando a página inicial"
                        />
                    </Item>
                    <Item>
                        <IconeNavegacao
                            to="/contato"
                            src={icones.mensagem}
                            alt="Ícone de uma mensagem, representando a área de contato"
                        />
                    </Item>
                    <Item>
                        {!deveOcultarPerfil && (
                            <IconeNavegacao
                                to="/perfil"
                                src={fotoUsuario}
                                alt="Ícone de um usuário, representando a área de perfil"
                            />
                        )}
                    </Item>
                </Lista>
            </Navegacao>
        </Header>
    )
}

export default Cabecalho
