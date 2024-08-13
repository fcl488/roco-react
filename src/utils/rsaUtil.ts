
import { JSEncrypt } from 'encryptlong'

const encrypt = new JSEncrypt()

export default {
    encode(password: string, publicKey: string): string {
        encrypt.setPublicKey(publicKey)
        const res = encrypt.encryptLong(password)
        if(typeof res === 'string') {
            return res
        }
        return ''
    }
}