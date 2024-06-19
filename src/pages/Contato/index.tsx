import { useContatoForm } from '@/hooks/useContatoForm'
import { Formulario, Principal, Titulo } from './styled'
import CampoTextoFormulario from '@/components/CampoTextoFormulario'
import AreaTexto from '@/components/AreaTexto'
import MensagemDeErro from '@/components/MensagemDeErro'
import Botao from '@/components/Botao'

const Contato = () => {
    const { register, handleSubmit, errors, enviar } = useContatoForm()

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
                {errors.nome && (
                    <MensagemDeErro>{errors.nome.message}</MensagemDeErro>
                )}
                <CampoTextoFormulario
                    id="telefone"
                    type="tel"
                    label="Telefone"
                    placeholder="Insira seu telefone e/ou whatsapp"
                    register={register('telefone')}
                />
                {errors.telefone && (
                    <MensagemDeErro>{errors.telefone.message}</MensagemDeErro>
                )}
                <CampoTextoFormulario
                    id="nomeAnimal"
                    type="text"
                    label="Nome do animal"
                    placeholder="Por qual animal você se interessou?"
                    register={register('nomeAnimal')}
                />
                {errors.nomeAnimal && (
                    <MensagemDeErro>{errors.nomeAnimal.message}</MensagemDeErro>
                )}
                <AreaTexto
                    id="mensagem"
                    label="Mensagem"
                    placeholder="Escreva sua mensagem."
                    register={register('mensagem')}
                />
                {errors.mensagem && (
                    <MensagemDeErro>{errors.mensagem.message}</MensagemDeErro>
                )}
                <Botao variante="normal">Enviar</Botao>
            </Formulario>
        </Principal>
    )
}

export default Contato
