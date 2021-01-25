import { isplitLast } from '~/iterator/split'
import type { Maybe } from '~/type/maybe'
import type { Traversable } from '~/type/traversable'

export function last<T>(xs: Traversable<T>): Maybe<T> {
    const [, last] = isplitLast(xs)
    return last
}
