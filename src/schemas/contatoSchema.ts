import { z } from 'zod'

export const contatoSchema = z.object({
    nome: z
        .string()
        .min(1, { message: 'O campo nome é obrigatório.' })
        .min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
        .max(50, { message: 'O nome não pode ter mais de 50 caracteres.' }),
    telefone: z
        .string()
        .min(1, { message: 'O campo telefone é obrigatório.' })
        .regex(/\(?\d{2}\)?\s?\d{4,5}[\s-]?\d{4}/, {
            message: 'O telefone não é válido.',
        }),
    nomeAnimal: z
        .string()
        .min(1, { message: 'O campo nome do animal é obrigatório.' })
        .min(3, { message: 'O nome do animal deve ter pelo menos 3 caracteres.' })
        .max(50, { message: 'O nome do animal não pode ter mais de 50 caracteres.' }),
    mensagem: z
        .string()
        .min(1, { message: 'O campo mensagem é obrigatório.' })
        .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
        .max(500, { message: 'A mensagem não pode ter mais de 500 caracteres.' }),
})

export type ContatoSchemaType = z.infer<typeof contatoSchema>
