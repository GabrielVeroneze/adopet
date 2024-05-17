import { Header, Item, Lista, Navegacao } from './styled'
import IconeLink from '@/components/IconeLink'
import icones from '@/assets/icons'

const Cabecalho = () => {
    const navItens = [
        {
            to: '#',
            src: icones.casa,
            alt: 'Ícone de uma casa, representando a página inicial',
        },
        {
            to: '#',
            src: icones.mensagem,
            alt: 'Ícone de uma mensagem, representando as mensagens',
        },
        {
            to: '#',
            src: icones.usuario,
            alt: 'Ícone de um usuário, representando a área de perfil',
        },
    ]

    return (
        <Header>
            <Navegacao>
                <Lista>
                    {navItens.map((item, index) => (
                        <Item key={index}>
                            <IconeLink {...item} />
                        </Item>
                    ))}
                </Lista>
            </Navegacao>
        </Header>
    )
}

export default Cabecalho
