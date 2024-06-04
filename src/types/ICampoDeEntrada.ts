export interface ICampoDeEntrada {
    name: string
    type?: 'email' | 'password' | 'tel' | 'text'
    label: string
    placeholder: string
}
