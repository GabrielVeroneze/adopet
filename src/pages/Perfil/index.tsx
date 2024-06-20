import { usePerfilForm } from '@/hooks/usePerfilForm'
import { Formulario, Principal, Subtitulo, Titulo } from './styled'
import CampoUploadFoto from '@/pages/Perfil/CampoUploadFoto'
import CampoTexto from '@/components/CampoTexto'
import AreaTexto from '@/components/AreaTexto'
import MensagemDeErro from '@/components/MensagemDeErro'
import Botao from '@/components/Botao'

const Perfil = () => {
    const { register, handleSubmit, watch, errors, salvar } = usePerfilForm()

    return (
        <Principal>
            <Titulo>
                Esse é o perfil que aparece para responsáveis ou ONGs que
                recebem sua mensagem.
            </Titulo>
            <Formulario onSubmit={handleSubmit(salvar)}>
                <Subtitulo>Perfil</Subtitulo>
                <CampoUploadFoto
                    imagem={watch('foto')}
                    register={register('foto')}
                />
                {errors.foto && (
                    <MensagemDeErro>{errors.foto.message}</MensagemDeErro>
                )}
                <CampoTexto
                    id="nome"
                    type="text"
                    label="Nome"
                    placeholder="Digite seu nome completo"
                    register={register('nome')}
                />
                {errors.nome && (
                    <MensagemDeErro>{errors.nome.message}</MensagemDeErro>
                )}
                <CampoTexto
                    id="telefone"
                    type="tel"
                    label="Telefone"
                    placeholder="Digite seu telefone"
                    register={register('telefone')}
                />
                {errors.telefone && (
                    <MensagemDeErro>{errors.telefone.message}</MensagemDeErro>
                )}
                <CampoTexto
                    id="cidade"
                    type="text"
                    label="Cidade"
                    placeholder="Digite o nome da sua cidade"
                    register={register('cidade')}
                />
                {errors.cidade && (
                    <MensagemDeErro>{errors.cidade.message}</MensagemDeErro>
                )}
                <AreaTexto
                    id="sobre"
                    label="Sobre"
                    placeholder="Escreva sobre você"
                    register={register('sobre')}
                />
                {errors.sobre && (
                    <MensagemDeErro>{errors.sobre.message}</MensagemDeErro>
                )}
                <Botao variante="normal">Salvar</Botao>
            </Formulario>
        </Principal>
    )
}

export default Perfil
