import { Formulario, Link } from './styled'
import CampoDeTexto from '@/components/CampoDeTexto'
import Botao from '@/components/Botao'

const FormularioLogin = () => {
    return (
        <Formulario>
            <CampoDeTexto
                id="email"
                type="email"
                label="Email"
                placeholder="Insira seu email"
            />
            <CampoDeTexto
                id="senha"
                type="password"
                label="Senha"
                placeholder="Insira sua senha"
            />
            <Link to="#">Esqueci minha senha.</Link>
            <Botao variante="normal">Entrar</Botao>
        </Formulario>
    )
}

export default FormularioLogin