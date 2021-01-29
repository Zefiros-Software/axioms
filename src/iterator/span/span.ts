import { next } from '~/generator/next'
import { isRight } from '~/guard/is-right'
import { itakeWhile } from '~/iterator/take'
import type { Mappable, Traverser } from '~/type/traversable'
import { toTraversable } from '~/type/traversable'

export function ispan<T, R>(predicate: (x: T) => boolean, xs: Mappable<T, R>): [T[], Traverser<T, R>] {
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

export function span<T, R>(predicate: (x: T) => boolean, xs: Mappable<T, R>): [T[], T[]] {
    const [first, second] = ispan(predicate, xs)
    return [first, [...toTraversable(second)]]
}
