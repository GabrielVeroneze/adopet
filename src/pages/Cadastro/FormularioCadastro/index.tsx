import { useCadastroForm } from '@/hooks/useCadastroForm'
import { Formulario } from './styled'
import CampoDeTexto from '@/components/CampoDeTexto'
import MensagemDeErro from '@/components/MensagemDeErro'
import Botao from '@/components/Botao'

const FormularioCadastro = () => {
    const { register, handleSubmit, errors, cadastrar } = useCadastroForm()

    return (
        <Formulario onSubmit={handleSubmit(cadastrar)}>
            <CampoDeTexto
                id="email"
                type="email"
                label="Email"
                placeholder="Escolha seu melhor email"
                register={register('email')}
            />
            {errors.email && (
                <MensagemDeErro>{errors.email.message}</MensagemDeErro>
            )}
            <CampoDeTexto
                id="nome"
                type="text"
                label="Nome"
                placeholder="Digite seu nome completo"
                register={register('nome')}
            />
            {errors.nome && (
                <MensagemDeErro>{errors.nome.message}</MensagemDeErro>
            )}
            <CampoDeTexto
                id="senha"
                type="password"
                label="Senha"
                placeholder="Crie uma senha"
                register={register('senha')}
            />
            {errors.senha && (
                <MensagemDeErro>{errors.senha.message}</MensagemDeErro>
            )}
            <CampoDeTexto
                id="confirmarSenha"
                type="password"
                label="Confirma sua senha"
                placeholder="Repita a senha criada acima"
                register={register('confirmarSenha')}
            />
            {errors.confirmarSenha && (
                <MensagemDeErro>{errors.confirmarSenha.message}</MensagemDeErro>
            )}
            <Botao variante="normal">Cadastrar</Botao>
        </Formulario>
    )
}

export default FormularioCadastro
