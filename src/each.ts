import { isArray } from '~/is-array'
import { isPlainObject } from '~/is-plain-object'

export function each<T>(collection: T[], callback: ArrayIterator<T, any>): void
export function each<T extends object>(collection: T, callback: ObjectIterator<T, any>): void
export function each<T>(collection: T, callback: ArrayIterator<T, any> | ObjectIterator<T, any>): void {
    if (isArray<T>(collection)) {
        collection.forEach(callback as ArrayIterator<T, any>)
    } else if (isPlainObject(collection)) {
        Object.entries(collection).forEach(([key, value]) => (callback as ObjectIterator<T, any>)(value, key, collection))
    }
}
