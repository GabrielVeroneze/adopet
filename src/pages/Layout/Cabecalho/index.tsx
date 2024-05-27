import { useLocation } from 'react-router-dom'
import { Header, Item, Lista, Logo, Navegacao } from './styled'
import IconeLink from '@/components/IconeLink'
import logo from '@/assets/images/logo-cabecalho.svg'
import icones from '@/assets/icons'

const Cabecalho = () => {
    const { pathname } = useLocation()

    const deveOcultarPerfil = ['/', '/cadastro', '/login'].includes(pathname)

    return (
        <Header $rotaAtual={pathname}>
            <Navegacao>
                <Lista>
                    <Item>
                        <Logo src={logo} alt="Logotipo da Adopet" />
                    </Item>
                    <Item>
                        <IconeLink
                            to="/home"
                            src={icones.casa}
                            alt="Ícone de uma casa, representando a página inicial"
                        />
                    </Item>
                    <Item>
                        <IconeLink
                            to="/contato"
                            src={icones.mensagem}
                            alt="Ícone de uma mensagem, representando a área de contato"
                        />
                    </Item>
                    <Item>
                        {!deveOcultarPerfil && (
                            <IconeLink
                                to="/perfil"
                                src={icones.usuario}
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
