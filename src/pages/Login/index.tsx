import { Principal, Titulo } from './styled'
import FormularioLogin from './FormularioLogin'
import logo from '@/assets/images/logo-azul.svg'

const Login = () => {
    return (
        <Principal>
            <img src={logo} alt="Logotipo da Adopet" />
            <Titulo>Já tem conta? Faça seu login:</Titulo>
            <FormularioLogin />
        </Principal>
    )
}

export default Login
