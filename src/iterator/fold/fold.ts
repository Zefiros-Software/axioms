import { isplitHead } from '~/iterator/split'

export function foldl<T, R>(reducer: (acc: R, val: T) => R, init: R, xs: Iterable<T>): R {
    let acc = init
    for (const x of xs) {
        acc = reducer(acc, x)
    }
    return acc
}

export function foldl1<T>(reducer: (acc: T, val: T) => T, xs: Iterable<T>): T {
    const [head, rest] = isplitHead(xs)
    // if first is undefined due to the length of the Iterable
    // the result will be an empty array
    return foldl(reducer, head!, rest)
}
