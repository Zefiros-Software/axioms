import { idrop } from '~/iterator/drop'

export function* scanl<T, R>(reducer: (acc: R, val: T) => R, init: R, vals: Iterable<T>) {
    let acc = init
    yield acc
    for (const x of vals) {
        acc = reducer(acc, x)
        yield acc
    }
    return acc
}

export function* scanl1<T>(reducer: (acc: T, val: T) => T, vals: Iterable<T>) {
    yield* scanl(reducer, vals[Symbol.iterator]().next().value, idrop(1, vals))
}
