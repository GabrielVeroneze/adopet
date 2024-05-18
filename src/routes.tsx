import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Inicial from '@/pages/Inicial'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicial />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
