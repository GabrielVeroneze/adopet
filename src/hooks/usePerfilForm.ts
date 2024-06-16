import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PerfilSchemaType, perfilSchema } from '@/schemas/perfilSchema'
import { useUsuario } from '@/context/usuario/useUsuario'
import { jsonServerApi } from '@/services/api'
import { converterImagemEmBase64 } from '@/utilities/converterImagem'
import { notificarUsuario } from '@/utilities/mostrarNotificacao'
import { IUsuario } from '@/types/IUsuario'

export const usePerfilForm = () => {
    const { usuario, setUsuario } = useUsuario()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<PerfilSchemaType>({
        mode: 'onTouched',
        resolver: zodResolver(perfilSchema),
    })

    const salvar = async (dados: PerfilSchemaType) => {
        const fotoFormatada = await converterImagemEmBase64(dados.foto)

        jsonServerApi
            .patch<IUsuario>(`/usuarios/${usuario!.id}`, {
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
