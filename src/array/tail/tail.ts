import { uncons } from '~/iterator/uncons'
import { Traverser } from '~/type/traversable'

export function itail<T>(xs: Iterable<T>): Traverser<T> {
    const [, rest] = uncons(xs)
    return rest
}

export function tail<T extends unknown[]>(xs: readonly [unknown, ...T]): [...T] {
    const [, ...rest] = xs
    return rest
}
