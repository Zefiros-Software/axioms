import { isArray } from '~/guard/is-array'

export function ilength<T>(xs: Iterable<T> | readonly T[]): number | undefined {
    if (isArray(xs)) {
        return xs.length
    }
    return undefined
}

export function length<T>(xs: readonly T[]): number {
    return xs.length
}
