import { formatarCaracteristicas } from '@/utilities/formatarCaracteristicas'
import { Animais } from '@/types/Animais'
import { Contato, Endereco, Imagem, Info, Item, Nome } from './styled'

const FichaAnimal = (props: Animais) => {
    return (
        <Item>
            <Imagem src={props.imagem} alt={`Foto de ${props.nome}`} />
            <Nome>{props.nome}</Nome>
            <Info>
                {props.idade}
                <br />
                Porte {props.porte}
                <br />
                {formatarCaracteristicas(props.caracteristicas)}
            </Info>
            <Endereco>
                {props.cidade} ({props.estado})
            </Endereco>
            <Contato to="/contato">Falar com responsável</Contato>
        </Item>
    )
}

export default FichaAnimal
