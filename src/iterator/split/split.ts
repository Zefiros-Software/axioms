import { itake } from '~/iterator/take'

export function isplitAt<T>(at: number, xs: Iterable<T>): [T[], Iterable<T>] {
    const takeIterator = itake(at, xs)
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

export function isplitHead<T>(xs: Iterable<T>): [T | undefined, Iterable<T>] {
    const iterator = xs[Symbol.iterator]()
    const first = iterator.next()
    return [
        first.done !== true ? first.value : undefined,
        {
            [Symbol.iterator]() {
                return iterator
            },
        },
    ]
}

export function isplitLast<T>(xs: Iterable<T>): [T[], T | undefined] {
    const array = [...xs]
    const last = array.pop()
    return [array, last]
}

export function splitAt<T>(at: number, xs: Iterable<T>): [T[], T[]] {
    const [first, second] = isplitAt(at, xs)
    return [first, [...second]]
}
