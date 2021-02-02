import type { InfiniteGenerator } from '~/type/generator'
import type { Traversable } from '~/type/traversable'

export function ifilter<T>(by: (x: T) => boolean, xs: InfiniteGenerator<T>): InfiniteGenerator<T>
export function ifilter<T, R>(by: (x: T) => boolean, xs: Traversable<T, R>): Generator<T, R>
export function* ifilter<T, R>(by: (x: T) => boolean, xs: Traversable<T, R>) {
    for (const x of xs) {
        if (by(x)) {
            yield x
        }
    }
}

export function filter<T>(by: (x: T) => boolean, xs: Iterable<T>) {
    return [...ifilter(by, xs)]
}
