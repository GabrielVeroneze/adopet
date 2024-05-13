import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    button, input {
        border: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        outline: none;
        padding: 0;
    }

    button {
        background-color: unset;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    *::-webkit-scrollbar {
        height: 0.5rem;
        width: 0.5rem;
    }

    *::-webkit-scrollbar-track {
        border-radius: 0.5rem;
        background-color: #e7e7e7;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: #858585;
    }
`

export default GlobalStyles
