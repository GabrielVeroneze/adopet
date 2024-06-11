import { z } from 'zod'

export const contatoSchema = z.object({
    nome: z.string(),
    telefone: z.string(),
    nomeAnimal: z.string(),
    mensagem: z.string(),
})

export type ContatoSchemaType = z.infer<typeof contatoSchema>
