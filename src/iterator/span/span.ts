import { next } from '~/generator/next'
import { isRight } from '~/guard/is-right'
import { itakeWhile } from '~/iterator/take'
import type { Traversable } from '~/type/traversable'

export function ispan<T>(predicate: (x: T) => boolean, xs: Traversable<T>): [T[], Traversable<T>] {
    const takeIterator = itakeWhile(predicate, xs)
    const first = []
    let it = next(takeIterator)
    while (isRight(it)) {
        first.push(it.right)
        it = next(takeIterator)
    }
    const rest = it.left
    return [first, rest]
}

export function span<T>(predicate: (x: T) => boolean, xs: Iterable<T>): [T[], T[]] {
    const [first, second] = ispan(predicate, xs)
    return [first, [...second]]
}
