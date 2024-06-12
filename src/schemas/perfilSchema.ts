import { z } from 'zod'

export const perfilSchema = z.object({
    foto: z.instanceof(FileList),
    nome: z.string(),
    telefone: z.string(),
    cidade: z.string(),
    sobre: z.string(),
})

export type PerfilSchemaType = z.infer<typeof perfilSchema>
