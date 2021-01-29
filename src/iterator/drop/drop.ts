import { peekable } from '~/generator/peekable'
import { isRight } from '~/guard/is-right'
import type { Mappable, Traversable } from '~/type/traversable'
import { toTraversable, toTraverser } from '~/type/traversable'

export function* idrop<T>(n: number, xs: Mappable<T>): Traversable<T, void> {
    const iterator = toTraverser(xs)
    for (let i = 0; i < n; ++i, iterator.next()) {
        //
    }
    yield* toTraversable(iterator)
}

export function* idropWhile<T>(predicate: (x: T) => boolean, xs: Mappable<T>): Traversable<T, void> {
    const iterator = peekable(xs)
    for (let peeked = iterator.peek(); isRight(peeked) && predicate(peeked.right); iterator.next(), peeked = iterator.peek()) {
        //
    }
    yield* toTraversable(iterator)
}

export function drop<T>(n: number, vals: Iterable<T>): Traversable<T> {
    return [...idrop(n, vals)]
}

export function dropWhile<T>(predicate: (x: T) => boolean, vals: Iterable<T>): Traversable<T> {
    return [...idropWhile(predicate, vals)]
}
