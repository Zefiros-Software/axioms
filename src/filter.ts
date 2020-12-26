import { fromPairs } from '~/from-pairs'
import { isArray } from '~/is-array'
import { isPlainObject } from '~/is-plain-object'

export function filter<T>(collection: T[], callback: ArrayIterator<T>): T[]
export function filter<T extends object>(collection: T, callback: ObjectIterator<T>): Array<T[keyof T]>
export function filter<T>(collection: T, callback: ArrayIterator<T> | ObjectIterator<T>): T[] | Array<T[keyof T]> {
    if (isArray<T>(collection)) {
        return collection.filter(callback as ArrayIterator<T>)
    } else if (isPlainObject(collection)) {
        return Object.entries(collection)
            .filter(([key, value]) => (callback as ObjectIterator<T>)(value, key, collection))
            .map(([key, value]) => value)
    }
    throw new Error('implementation is not complete')
}
