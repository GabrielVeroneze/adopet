import { Formulario, Principal, Titulo } from './styled'
import CampoTextoFormulario from '@/components/CampoTextoFormulario'
import AreaTextoFormulario from '@/components/AreaTextoFormulario'
import Botao from '@/components/Botao'

const Contato = () => {
    return (
        <Principal>
            <Titulo>
                Envie uma mensagem para a pessoa ou instituição que está
                cuidando do animal:
            </Titulo>
            <Formulario>
                <CampoTextoFormulario
                    id="nome"
                    type="text"
                    label="Nome"
                    placeholder="Insira seu nome completo"
                />
                <CampoTextoFormulario
                    id="telefone"
                    type="tel"
                    label="Telefone"
                    placeholder="Insira seu telefone e/ou whatsapp"
                />
                <CampoTextoFormulario
                    id="nome-animal"
                    type="text"
                    label="Nome do animal"
                    placeholder="Por qual animal você se interessou?"
                />
                <AreaTextoFormulario
                    id="mensagem"
                    label="Mensagem"
                    placeholder="Escreva sua mensagem."
                />
                <Botao variante="normal">Enviar</Botao>
            </Formulario>
        </Principal>
    )
}

export default Contato