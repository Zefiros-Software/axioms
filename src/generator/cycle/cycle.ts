import type { InfiniteGenerator } from '~/type/generator'
import { toTraversable } from '~/type/traversable'

export function* cycle<T>(xs: readonly T[] | (() => Generator<T>)): InfiniteGenerator<T> {
    while (true) {
        for (const x of toTraversable(xs)) {
            yield x
        }
    }
}
