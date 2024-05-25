export interface ICampoDeEntrada {
    id: string
    type?: 'email' | 'password' | 'tel' | 'text'
    label: string
    placeholder: string
}
