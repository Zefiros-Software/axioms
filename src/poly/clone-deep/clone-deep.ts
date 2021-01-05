import { isArray } from '~/guard/is-array/is-array'
import { isObject } from '~/guard/is-object'
import type { Dict } from '~/type/dict'

export function cloneDeep<Arr extends ReadonlyArray<unknown>>(arr: Arr): Arr
export function cloneDeep<T extends Dict>(obj: T): T
export function cloneDeep<V>(value: V): V
export function cloneDeep(obj: unknown): unknown {
    if (isArray(obj)) {
        return obj.map((x) => cloneDeep(x))
    } else if (isObject(obj)) {
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, cloneDeep(v)]))
    } else {
        return obj
    }
}
