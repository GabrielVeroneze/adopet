import { useContatoForm } from '@/hooks/useContatoForm'
import { Formulario, Principal, Titulo } from './styled'
import CampoTextoFormulario from '@/components/CampoTextoFormulario'
import AreaTextoFormulario from '@/components/AreaTextoFormulario'
import Botao from '@/components/Botao'

const Contato = () => {
    const { register, handleSubmit, enviar } = useContatoForm()

    return (
        <Principal>
            <Titulo>
                Envie uma mensagem para a pessoa ou instituição que está
                cuidando do animal:
            </Titulo>
            <Formulario onSubmit={handleSubmit(enviar)}>
                <CampoTextoFormulario
                    id="nome"
                    type="text"
                    label="Nome"
                    placeholder="Insira seu nome completo"
                    register={register('nome')}
                />
                <CampoTextoFormulario
                    id="telefone"
                    type="tel"
                    label="Telefone"
                    placeholder="Insira seu telefone e/ou whatsapp"
                    register={register('telefone')}
                />
                <CampoTextoFormulario
                    id="nomeAnimal"
                    type="text"
                    label="Nome do animal"
                    placeholder="Por qual animal você se interessou?"
                    register={register('nomeAnimal')}
                />
                <AreaTextoFormulario
                    id="mensagem"
                    label="Mensagem"
                    placeholder="Escreva sua mensagem."
                    register={register('mensagem')}
                />
                <Botao variante="normal">Enviar</Botao>
            </Formulario>
        </Principal>
    )
}

export default Contato
