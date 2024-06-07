import { useLoginForm } from '@/hooks/useLoginForm'
import { Formulario, Link } from './styled'
import CampoDeTexto from '@/components/CampoDeTexto'
import Botao from '@/components/Botao'

const FormularioLogin = () => {
    const { register, handleSubmit, errors, fazerLogin } = useLoginForm()

    return (
        <Formulario onSubmit={handleSubmit(fazerLogin)}>
            <CampoDeTexto
                id="email"
                type="email"
                label="Email"
                placeholder="Insira seu email"
                register={register('email')}
            />
            <CampoDeTexto
                id="senha"
                type="password"
                label="Senha"
                placeholder="Insira sua senha"
                register={register('senha')}
            />
            <Link to="#">Esqueci minha senha.</Link>
            <Botao variante="normal">Entrar</Botao>
        </Formulario>
    )
}

export default FormularioLogin
