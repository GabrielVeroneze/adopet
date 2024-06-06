import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Formulario } from './styled'
import CampoDeTexto from '@/components/CampoDeTexto'
import Botao from '@/components/Botao'

const cadastroSchema = z.object({
    email: z.string().min(3),
    nome: z.string().min(3),
    senha: z.string().min(3),
    confirmarSenha: z.string().min(3),
})

type CadastroSchemaType = z.infer<typeof cadastroSchema>

const FormularioCadastro = () => {
    const {
        register,
        handleSubmit,
    } = useForm<CadastroSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(cadastroSchema),
    })

    const handleFormSubmit = (dados: CadastroSchemaType) => {
        console.log(dados)
    }

    return (
        <Formulario onSubmit={handleSubmit(handleFormSubmit)}>
            <CampoDeTexto
                id="email"
                type="email"
                label="Email"
                placeholder="Escolha seu melhor email"
                register={register('email')}
            />
            <CampoDeTexto
                id="nome"
                type="text"
                label="Nome"
                placeholder="Digite seu nome completo"
                register={register('nome')}
            />
            <CampoDeTexto
                id="senha"
                type="password"
                label="Senha"
                placeholder="Crie uma senha"
                register={register('senha')}
            />
            <CampoDeTexto
                id="confirmarSenha"
                type="password"
                label="Confirma sua senha"
                placeholder="Repita a senha criada acima"
                register={register('confirmarSenha')}
            />
            <Botao variante="normal">Cadastrar</Botao>
        </Formulario>
    )
}

export default FormularioCadastro
