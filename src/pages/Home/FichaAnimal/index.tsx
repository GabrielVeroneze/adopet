import { formatarCaracteristicas } from '@/utilities/formatarCaracteristicas'
import { IAnimais } from '@/types/IAnimais'
import { Contato, Endereco, Imagem, Info, Item, Nome } from './styled'

const FichaAnimal = (props: IAnimais) => {
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
