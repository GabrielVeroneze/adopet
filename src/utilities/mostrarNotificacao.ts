import { toast } from 'react-toastify'

export const notificarUsuario = (
    tipo: 'success' | 'error',
    mensagem: string
) => {
    toast[tipo](mensagem, {
        position: 'bottom-right',
        theme: 'light',
    })
}
