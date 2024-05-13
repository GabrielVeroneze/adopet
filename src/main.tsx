import React from 'react'
import ReactDOM from 'react-dom/client'
import ResetStyles from '@/styles/Reset'
import GlobalStyles from '@/styles/Global'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ResetStyles />
        <GlobalStyles />
    </React.StrictMode>
)
