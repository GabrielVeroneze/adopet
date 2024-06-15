import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PerfilSchemaType, perfilSchema } from '@/schemas/perfilSchema'
import { useUsuario } from '@/context/usuario/useUsuario'
import { jsonServerApi } from '@/services/api'
import { transformarImagemEmUrl } from '@/utilities/transformarImagemEmUrl'
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

    const salvar = (dados: PerfilSchemaType) => {
        const perfilFormatado = {
            ...dados,
            foto: transformarImagemEmUrl(dados.foto),
        }

        jsonServerApi
            .patch<IUsuario>(`/usuarios/${usuario!.id}`, {
                perfil: perfilFormatado,
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
