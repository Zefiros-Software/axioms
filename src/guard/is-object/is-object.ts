import type { Obj } from '~/type/obj'

export function isObject<T>(obj: Obj<T> | unknown): obj is Obj<T> {
    return obj !== undefined && obj !== null && typeof obj === 'object' && !Array.isArray(obj)
}
