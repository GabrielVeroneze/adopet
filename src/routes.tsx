import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Inicial from '@/pages/Inicial'
import Cadastro from '@/pages/Cadastro'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicial />} />
                    <Route path="cadastro" element={<Cadastro />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
