import { z } from 'zod'

export const cadastroSchema = z
    .object({
        email: z
            .string()
            .min(1, { message: 'O campo email é obrigatório.' })
            .email({ message: 'Insira um endereço de email válido.' }),
        nome: z
            .string()
            .min(1, { message: 'O campo nome é obrigatório.' })
            .min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
            .max(50, { message: 'O nome não pode ter mais de 50 caracteres.' })
            .regex(/^[a-zA-Z ]+$/, {
                message: 'O nome só pode conter letras e espaços.',
            }),
        senha: z
            .string()
            .min(1, { message: 'O campo senha é obrigatório.' })
            .regex(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/, {
                message: 'A senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula e um número.',
            }),
        confirmarSenha: z
            .string()
            .min(1, { message: 'O campo confirmar senha é obrigatório.' }),
    })
    .refine(({ senha, confirmarSenha }) => senha === confirmarSenha, {
        message: 'As senhas precisam ser iguais.',
        path: ['confirmarSenha'],
    })

export type CadastroSchemaType = z.infer<typeof cadastroSchema>
