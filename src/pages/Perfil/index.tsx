import { Formulario, Principal, Subtitulo, Titulo } from './styled'
import CampoUploadFoto from '@/pages/Perfil/CampoUploadFoto'
import CampoTextoFormulario from '@/components/CampoTextoFormulario'
import AreaTextoFormulario from '@/components/AreaTextoFormulario'
import Botao from '@/components/Botao'

const Perfil = () => {
    return (
        <Principal>
            <Titulo>
                Esse é o perfil que aparece para responsáveis ou ONGs que
                recebem sua mensagem.
            </Titulo>
            <Formulario>
                <Subtitulo>Perfil</Subtitulo>
                <CampoUploadFoto />
                <CampoTextoFormulario
                    name="nome"
                    type="text"
                    label="Nome"
                    placeholder="Digite seu nome completo"
                />
                <CampoTextoFormulario
                    name="telefone"
                    type="tel"
                    label="Telefone"
                    placeholder="Digite seu telefone"
                />
                <CampoTextoFormulario
                    name="cidade"
                    type="text"
                    label="Cidade"
                    placeholder="Digite o nome da sua cidade"
                />
                <AreaTextoFormulario
                    name="sobre"
                    label="Sobre"
                    placeholder="Escreva sobre você"
                />
                <Botao variante="normal">Salvar</Botao>
            </Formulario>
        </Principal>
    )
}

export default Perfil
