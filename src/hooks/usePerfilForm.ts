import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PerfilSchemaType, perfilSchema } from '@/schemas/perfilSchema'
import { useUsuario } from '@/context/usuario/useUsuario'
import { jsonServerApi } from '@/services/api'
import { converterBase64EmFile, converterImagemEmBase64 } from '@/utilities/converterImagem'
import { notificarUsuario } from '@/utilities/mostrarNotificacao'
import { Usuario } from '@/types/Usuario'

export const usePerfilForm = () => {
    const { usuario, setUsuario } = useUsuario()

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<PerfilSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(perfilSchema),
    })

    useEffect(() => {
        if (usuario?.perfil) {
            reset({
                ...usuario.perfil,
                foto: converterBase64EmFile(usuario.perfil.foto),
            })
        }
    }, [usuario, reset])

    const salvar = async (dados: PerfilSchemaType) => {
        const fotoFormatada = await converterImagemEmBase64(dados.foto)

        jsonServerApi
            .patch<Usuario>(`/usuarios/${usuario!.id}`, {
                perfil: {
                    ...dados,
                    foto: fotoFormatada,
                },
            })
            .then(resposta => {
                setUsuario(resposta.data)
                notificarUsuario('success', 'Perfil atualizado com sucesso')
            })
            .catch(() => {
                notificarUsuario('error', 'Erro ao atualizar perfil')
            })
    }

    return {
        register,
        handleSubmit,
        watch,
        errors,
        salvar,
    }
}
