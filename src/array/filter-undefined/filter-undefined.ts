import { isDefined } from '~/guard/is-defined'

export function filterUndefined<T>(array: (T | undefined)[]): T[]
export function filterUndefined<T>(array: ReadonlyArray<T | undefined>): ReadonlyArray<T> {
    return array.filter(isDefined)
}
