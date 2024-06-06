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
        formState: { errors },
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
            {errors.email && <p>{errors.email.message}</p>}
            <CampoDeTexto
                id="nome"
                type="text"
                label="Nome"
                placeholder="Digite seu nome completo"
                register={register('nome')}
            />
            {errors.nome && <p>{errors.nome.message}</p>}
            <CampoDeTexto
                id="senha"
                type="password"
                label="Senha"
                placeholder="Crie uma senha"
                register={register('senha')}
            />
            {errors.senha && <p>{errors.senha.message}</p>}
            <CampoDeTexto
                id="confirmarSenha"
                type="password"
                label="Confirma sua senha"
                placeholder="Repita a senha criada acima"
                register={register('confirmarSenha')}
            />
            {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>}
            <Botao variante="normal">Cadastrar</Botao>
        </Formulario>
    )
}

export default FormularioCadastro
