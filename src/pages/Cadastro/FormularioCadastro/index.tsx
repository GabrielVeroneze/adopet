import { Formulario } from './styled'
import CampoDeTexto from '@/components/CampoDeTexto'
import Botao from '@/components/Botao'

const FormularioCadastro = () => {
    return (
        <Formulario>
            <CampoDeTexto
                id="email"
                type="email"
                label="Email"
                placeholder="Escolha seu melhor email"
            />
            <CampoDeTexto
                id="nome"
                type="text"
                label="Nome"
                placeholder="Digite seu nome completo"
            />
            <CampoDeTexto
                id="senha"
                type="password"
                label="Senha"
                placeholder="Crie uma senha"
            />
            <CampoDeTexto
                id="confirmar-senha"
                type="password"
                label="Confirma sua senha"
                placeholder="Repita a senha criada acima"
            />
            <Botao variante="normal">Cadastrar</Botao>
        </Formulario>
    )
}

export default FormularioCadastro
