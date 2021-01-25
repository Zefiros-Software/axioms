import { isplitLast } from '~/iterator/split'
import type { Traversable } from '~/type/traversable'

export function init<T>(xs: Traversable<T>): T[] {
    const [init] = isplitLast(xs)
    return init
}
