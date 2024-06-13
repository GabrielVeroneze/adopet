import icones from '@/assets/icons'

export const transformarImagemEmUrl = (arquivo: FileList) => {
    if (!arquivo || !arquivo[0]) {
        return icones.usuario
    }

    return URL.createObjectURL(arquivo[0])
}
