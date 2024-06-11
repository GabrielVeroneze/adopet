import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { UsuarioProvider } from '@/context/usuario/UsuarioProvider'
import { theme } from '@/styles/Theme'
import AppRoutes from '@/routes'
import ResetStyles from '@/styles/Reset'
import GlobalStyles from '@/styles/Global'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ResetStyles />
            <GlobalStyles />
            <ToastContainer />
            <UsuarioProvider>
                <AppRoutes />
            </UsuarioProvider>
        </ThemeProvider>
    </React.StrictMode>
)
