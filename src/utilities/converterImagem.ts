import { IFoto } from '@/types/IFoto'
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

export const converterBase64EmFile = ({
    base64,
    fileName,
    fileType,
}: IFoto) => {
    const byteString = atob(base64.split(',')[1])
    const mimeType = base64.split(',')[0].match(/:(.*?);/)![1]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }

    const blob = new Blob([ab], { type: mimeType })
    const file = new File([blob], fileName, { type: fileType })

    const fileList = new DataTransfer()
    fileList.items.add(file)

    return fileList.files
}
