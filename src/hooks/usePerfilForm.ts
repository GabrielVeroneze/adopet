import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PerfilSchemaType, perfilSchema } from '@/schemas/perfilSchema'
import { useUsuario } from '@/context/usuario/useUsuario'
import { atualizarPerfil } from '@/services/usuario'
import { converterBase64EmFile, converterImagemEmBase64 } from '@/utilities/converterImagem'
import { notificarUsuario } from '@/utilities/mostrarNotificacao'

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
        if (!usuario) return

        const novosDadosPerfil = {
            ...dados,
            foto: await converterImagemEmBase64(dados.foto),
        }

        try {
            const usuarioAtualizado = await atualizarPerfil(usuario.id!, novosDadosPerfil)

            setUsuario(usuarioAtualizado)
            notificarUsuario('success', 'Perfil atualizado com sucesso')
        } catch (erro) {
            if (erro instanceof Error) {
                notificarUsuario('error', erro.message)
            }
        }
    }

    return {
        register,
        handleSubmit,
        watch,
        errors,
        salvar,
    }
}
