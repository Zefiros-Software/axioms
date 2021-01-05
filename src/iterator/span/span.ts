import { itakeWhile } from '~/iterator/take'

export function ispan<T>(predicate: (x: T) => boolean, xs: Iterable<T>): [T[], Iterable<T>] {
    const takeIterator = itakeWhile(predicate, xs)
    const first = []
    let next: IteratorResult<T | Iterator<T>> = takeIterator.next()

    while (next.done !== true) {
        first.push(next.value as T)
        next = takeIterator.next()
    }
    return [
        first,
        {
            [Symbol.iterator]() {
                return next.value as Iterator<T>
            },
        },
    ]
}

export function span<T>(predicate: (x: T) => boolean, xs: Iterable<T>): [T[], T[]] {
    const [first, second] = ispan(predicate, xs)
    return [first, [...second]]
}
