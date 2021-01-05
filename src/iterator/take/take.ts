import { iprependIterator } from '~/iterator/prepend-iterator'

export function* itake<T>(n: number, xs: Iterable<T>) {
    const iterator = xs[Symbol.iterator]()
    for (let i = 0; i < n; ++i) {
        const val = iterator.next()
        if (val.done !== true) {
            yield val.value
        }
    }
    return iterator
}

export function* itakeWhile<T>(predicate: (x: T) => boolean, xs: Iterable<T>) {
    const iterator = xs[Symbol.iterator]()
    let val = iterator.next()
    for (let i = 0; predicate(val.value) && val.done !== true; ++i, val = iterator.next()) {
        yield val.value
    }

    // this iterator needs to peek at the next value
    return iprependIterator(val, iterator)
}

export function take<T>(n: number, xs: Iterable<T>): Iterable<T> {
    return [...itake(n, xs)]
}

export function takeWhile<T>(predicate: (x: T) => boolean, xs: Iterable<T>): Iterable<T> {
    return [...itakeWhile(predicate, xs)]
}
