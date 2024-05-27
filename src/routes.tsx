import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Inicial from '@/pages/Inicial'
import Cadastro from '@/pages/Cadastro'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Contato from '@/pages/Contato'
import Perfil from '@/pages/Perfil'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicial />} />
                    <Route path="cadastro" element={<Cadastro />} />
                    <Route path="login" element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="contato" element={<Contato />} />
                    <Route path="perfil" element={<Perfil />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
