import { useFormularioCadastro } from '@/hooks/useFormularioCadastro'
import { Formulario } from './styled'
import CampoDeTexto from '@/components/CampoDeTexto'
import Botao from '@/components/Botao'

const FormularioCadastro = () => {
    const { cadastroDados, handleDadosChange } = useFormularioCadastro()

    return (
        <Formulario>
            <CampoDeTexto
                name="email"
                type="email"
                label="Email"
                placeholder="Escolha seu melhor email"
                value={cadastroDados.email}
                onChange={handleDadosChange}
            />
            <CampoDeTexto
                name="nome"
                type="text"
                label="Nome"
                placeholder="Digite seu nome completo"
                value={cadastroDados.nome}
                onChange={handleDadosChange}
            />
            <CampoDeTexto
                name="senha"
                type="password"
                label="Senha"
                placeholder="Crie uma senha"
                value={cadastroDados.senha}
                onChange={handleDadosChange}
            />
            <CampoDeTexto
                name="confirmarSenha"
                type="password"
                label="Confirma sua senha"
                placeholder="Repita a senha criada acima"
                value={cadastroDados.confirmarSenha}
                onChange={handleDadosChange}
            />
            <Botao variante="normal">Cadastrar</Botao>
        </Formulario>
    )
}

export default FormularioCadastro
