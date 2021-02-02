import type { Traversable } from '~/type/traversable'
import { Traverser } from '~/type/traversable'

export function* iterate<T>(f: (x: T) => T, x: T): Traversable<T> {
    let v = x
    while (true) {
        yield v
        v = f(v)
    }
}
