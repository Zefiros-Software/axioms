import { isArray } from '~/guard/is-array'
import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/nothing'
import type { Traversable } from '~/type/traversable'

export function length<T>(xs: readonly T[]): number
export function length<T>(xs: Traversable<T>): Maybe<number> {
    if (isArray(xs)) {
        return xs.length
    }
    return Nothing
}
