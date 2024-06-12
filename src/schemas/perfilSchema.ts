import { z } from 'zod'

const tiposImagem = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

const tamanhoArquivo = 5 * 1024 * 1024 // 5MB

export const perfilSchema = z.object({
    foto: z
        .instanceof(FileList)
        .refine(files => files.length === 1, {
            message: 'Você deve enviar um arquivo.',
        })
        .refine(files => files[0]?.size <= tamanhoArquivo, {
            message: 'O arquivo deve ter no máximo 5MB.',
        })
        .refine(files => tiposImagem.includes(files[0]?.type), {
            message: 'Tipo de arquivo não suportado. Envie uma imagem JPEG, PNG, GIF ou WEBP.',
        }),
    nome: z
        .string()
        .min(1, { message: 'O campo nome é obrigatório.' })
        .min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
        .max(50, { message: 'O nome não pode ter mais de 50 caracteres.' })
        .regex(/^[a-zA-Z ]+$/, {
            message: 'O nome só pode conter letras e espaços.',
        }),
    telefone: z
        .string()
        .min(1, { message: 'O campo telefone é obrigatório.' })
        .regex(/\(?\d{2}\)?\s?\d{4,5}[\s-]?\d{4}/, {
            message: 'O telefone não é válido.',
        }),
    cidade: z
        .string()
        .min(1, { message: 'O campo cidade é obrigatório.' })
        .min(2, { message: 'A cidade deve ter pelo menos 2 caracteres.' })
        .max(50, { message: 'A cidade não pode ter mais de 50 caracteres.' }),
    sobre: z
        .string()
        .min(1, { message: 'O campo sobre é obrigatório.' })
        .min(10, { message: 'O sobre deve ter pelo menos 10 caracteres.' })
        .max(500, { message: 'O sobre não pode ter mais de 500 caracteres.' }),
})

export type PerfilSchemaType = z.infer<typeof perfilSchema>
