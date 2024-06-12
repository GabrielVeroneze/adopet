import { usePerfilForm } from '@/hooks/usePerfilForm'
import { Formulario, Principal, Subtitulo, Titulo } from './styled'
import CampoUploadFoto from '@/pages/Perfil/CampoUploadFoto'
import CampoTextoFormulario from '@/components/CampoTextoFormulario'
import AreaTextoFormulario from '@/components/AreaTextoFormulario'
import Botao from '@/components/Botao'

const Perfil = () => {
    const { register, handleSubmit, salvar } = usePerfilForm()

    return (
        <Principal>
            <Titulo>
                Esse é o perfil que aparece para responsáveis ou ONGs que
                recebem sua mensagem.
            </Titulo>
            <Formulario onSubmit={handleSubmit(salvar)}>
                <Subtitulo>Perfil</Subtitulo>
                <CampoUploadFoto register={register('foto')} />
                <CampoTextoFormulario
                    id="nome"
                    type="text"
                    label="Nome"
                    placeholder="Digite seu nome completo"
                    register={register('nome')}
                />
                <CampoTextoFormulario
                    id="telefone"
                    type="tel"
                    label="Telefone"
                    placeholder="Digite seu telefone"
                    register={register('telefone')}
                />
                <CampoTextoFormulario
                    id="cidade"
                    type="text"
                    label="Cidade"
                    placeholder="Digite o nome da sua cidade"
                    register={register('cidade')}
                />
                <AreaTextoFormulario
                    id="sobre"
                    label="Sobre"
                    placeholder="Escreva sobre você"
                    register={register('sobre')}
                />
                <Botao variante="normal">Salvar</Botao>
            </Formulario>
        </Principal>
    )
}

export default Perfil
