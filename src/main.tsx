import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@/routes'
import ResetStyles from '@/styles/Reset'
import GlobalStyles from '@/styles/Global'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ResetStyles />
        <GlobalStyles />
        <AppRoutes />
    </React.StrictMode>
)
