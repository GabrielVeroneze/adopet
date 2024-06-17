import icones from '@/assets/icons'

export const converterImagemEmBase64 = (arquivo: FileList) => {
    return new Promise(resolve => {
        if (!arquivo || !arquivo[0]) {
            resolve(icones.usuario)
        }

        const reader = new FileReader()

        reader.readAsDataURL(arquivo[0])

        reader.onload = () => {
            const base64 = reader.result

            resolve({
                base64,
                fileName: arquivo[0].name,
                fileType: arquivo[0].type,
            })
        }
    })
}
