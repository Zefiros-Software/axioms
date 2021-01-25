import type { Traversable } from '~/type/traversable'

export function* ifilter<T>(by: (x: T) => boolean, xs: Traversable<T>) {
    for (const x of xs) {
        if (by(x)) {
            yield x
        }
    }
}

export function filter<T>(by: (x: T) => boolean, xs: Iterable<T>) {
    return [...ifilter(by, xs)]
}
