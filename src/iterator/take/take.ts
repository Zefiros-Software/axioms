import { next } from '~/generator/next'
import { inext } from '~/generator/next/next'
import { peekable } from '~/generator/peekable/peekable'
import { isRight } from '~/guard/is-right'
import { iprependIterator } from '~/iterator/prepend-iterator'
import { Mappable, toTraverser, Traversable, Traverser } from '~/type/traversable'

export function* itake<T>(n: number, xs: Mappable<T>): Generator<T, Traverser<T>> {
    const iterator = toTraverser(xs)

    for (let i = 0; i < n; ++i) {
        const val = next(iterator)
        if (isRight(val)) {
            yield val.right
        } else {
            break
        }
    }

    return iterator
}

export function* itakeWhile<T>(predicate: (x: T) => boolean, xs: Mappable<T>): Generator<T, Traversable<T>> {
    const iterator = peekable(xs)
    for (let peeked = iterator.peek(); isRight(peeked) && predicate(peeked.right); iterator.next(), peeked = iterator.peek()) {
        yield peeked.right
    }
    return iterator
}

export function take<T>(n: number, xs: Traversable<T>): Iterable<T> {
    return [...itake(n, xs)]
}

export function takeWhile<T>(predicate: (x: T) => boolean, xs: Traversable<T>): Iterable<T> {
    return [...itakeWhile(predicate, xs)]
}
