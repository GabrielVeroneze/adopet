import { useLocation } from 'react-router-dom'
import { Header, Item, Lista, Navegacao } from './styled'
import IconeLink from '@/components/IconeLink'
import icones from '@/assets/icons'

const Cabecalho = () => {
    const { pathname } = useLocation()

    const deveOcultarPerfil = ['/', '/cadastro', '/login'].includes(pathname)

    return (
        <Header>
            <Navegacao>
                <Lista>
                    <Item>
                        <IconeLink
                            to="/home"
                            src={icones.casa}
                            alt="Ícone de uma casa, representando a página inicial"
                        />
                    </Item>
                    <Item>
                        <IconeLink
                            to="/mensagem"
                            src={icones.mensagem}
                            alt="Ícone de uma mensagem, representando as mensagens"
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
