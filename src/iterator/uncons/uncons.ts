import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/nothing'
import type { Mappable, Traverser } from '~/type/traversable'
import { toTraverser } from '~/type/traversable'

export function iuncons<T>(iterator: Traverser<T>): [Maybe<T>, Traverser<T>] {
    const head = iterator.next()
    return [head.done === true ? Nothing : head.value, iterator]
}

export function uncons<T>(xs: Mappable<T>): [Maybe<T>, Traverser<T>] {
    const iterator = toTraverser(xs)
    return iuncons(iterator)
}
