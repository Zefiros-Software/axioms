import type { Dict } from '~/type/dict'
import type { KeyOf } from '~/type/keys'

export function keys<T extends Dict>(obj: T): Array<KeyOf<T>> {
    return Object.keys(obj) as Array<KeyOf<T>>
}
