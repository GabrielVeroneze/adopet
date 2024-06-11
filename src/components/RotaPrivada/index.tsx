import { Navigate, Outlet } from 'react-router-dom'
import { useUsuario } from '@/context/usuario/useUsuario'

const RotaPrivada = () => {
    const { usuario } = useUsuario()

    if (!usuario) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default RotaPrivada
