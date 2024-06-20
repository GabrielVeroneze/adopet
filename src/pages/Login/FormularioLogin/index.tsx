import { useLoginForm } from '@/hooks/useLoginForm'
import { Formulario, Link } from './styled'
import CampoAuth from '@/components/CampoAuth'
import MensagemDeErro from '@/components/MensagemDeErro'
import Botao from '@/components/Botao'

const FormularioLogin = () => {
    const { register, handleSubmit, errors, logar } = useLoginForm()

    return (
        <Formulario onSubmit={handleSubmit(logar)}>
            <CampoAuth
                id="email"
                type="email"
                label="Email"
                placeholder="Insira seu email"
                register={register('email')}
            />
            {errors.email && (
                <MensagemDeErro>{errors.email.message}</MensagemDeErro>
            )}
            <CampoAuth
                id="senha"
                type="password"
                label="Senha"
                placeholder="Insira sua senha"
                register={register('senha')}
            />
            {errors.senha && (
                <MensagemDeErro>{errors.senha.message}</MensagemDeErro>
            )}
            <Link to="#">Esqueci minha senha.</Link>
            <Botao variante="normal">Entrar</Botao>
        </Formulario>
    )
}

export default FormularioLogin
