export function* idrop<T>(n: number, vals: Iterable<T>) {
    const iterator = vals[Symbol.iterator]()
    for (let i = 0, val = iterator.next(); val.done !== true; ++i, val = iterator.next()) {
        if (i >= n) {
            yield val.value
        }
    }
}

export function* idropWhile<T>(predicate: (x: T) => boolean, vals: Iterable<T>) {
    const iterator = vals[Symbol.iterator]()
    for (let i = 0, outPrefix = false, val = iterator.next(); val.done !== true; ++i, val = iterator.next()) {
        outPrefix ||= !predicate(val.value)
        if (outPrefix) {
            yield val.value
        }
    }
}

export function drop<T>(n: number, vals: Iterable<T>): Iterable<T> {
    return [...idrop(n, vals)]
}

export function dropWhile<T>(predicate: (x: T) => boolean, vals: Iterable<T>): Iterable<T> {
    return [...idropWhile(predicate, vals)]
}
