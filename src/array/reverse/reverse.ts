import { isArray } from '~/guard/is-array'
import type { Mappable, Traversable } from '~/type/traversable'
import { toTraversable } from '~/type/traversable'

export function* ireverse<T>(xs: Mappable<T>): Generator<T, void> {
    if (isArray<T>(xs)) {
        for (let i = xs.length - 1; i >= 0; --i) {
            yield xs[i]
        }
    } else {
        for (const x of [...toTraversable(xs)].reverse()) {
            yield x
        }
    }
}

export function reverse<T>(xs: T[]): T[]
export function reverse<T>(xs: readonly T[]): readonly T[]
export function reverse<T>(xs: Traversable<T>): readonly T[]
export function reverse<T>(xs: Traversable<T>): readonly T[] {
    return [...xs].reverse()
}
