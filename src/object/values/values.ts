import type { KeyOf } from '~/type/keys'

export function values<T>(obj: T): Array<T[KeyOf<T>]> {
    return Object.values(obj) as Array<T[KeyOf<T>]>
}
