import { next } from '~/generator/next'
import { isRight } from '~/guard/is-right'
import { itake } from '~/iterator/take'
import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/nothing'
import { Mappable, toTraverser, Traversable, Traverser } from '~/type/traversable'

export function isplitAt<T>(at: number, xs: Mappable<T>): [T[], Traverser<T>] {
    const takeIterator = itake(at, xs)
    const first = []
    let it = next(takeIterator)
    while (isRight(it)) {
        first.push(it.right)
        it = next(takeIterator)
    }
    const rest = it.left
    return [
        first,
        rest
    ]
}


export function isplitLast<T>(xs: Traversable<T>): [T[], Maybe<T>] {
    const array = [...xs]
    const last = array.length > 0 ? array.pop()! : Nothing
    return [array, last]
}

export function splitAt<T>(at: number, xs: Traversable<T>): [T[], T[]] {
    const [first, second] = isplitAt(at, xs)
    return [first, [...({ [Symbol.iterator]: () => second })]]
}
