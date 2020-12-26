import { isArray } from '~/is-array'
import { isPlainObject } from '~/is-plain-object'

export function some<T>(collection: T[], callback: ArrayIterator<T, unknown>): boolean
export function some<T extends object>(collection: T, callback: ObjectIterator<T, unknown>): boolean
export function some<T>(collection: T, callback: ArrayIterator<T, unknown> | ObjectIterator<T, unknown>): boolean {
    if (isArray<T>(collection)) {
        return collection.some(callback as ArrayIterator<T, unknown>)
    } else if (isPlainObject(collection)) {
        return Object.entries(collection).some(([key, value]) => (callback as ObjectIterator<T, unknown>)(value, key, collection))
    }
    throw new Error('implementation is not complete')
}
