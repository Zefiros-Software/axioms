import { uncons } from '../uncons'

import type { Mappable } from '~/type/traversable'
import { toTraversable } from '~/type/traversable'

export function foldl<T, R>(reducer: (acc: R, val: T) => R, init: R, xs: Mappable<T>): R {
    let acc = init
    for (const x of toTraversable(xs)) {
        acc = reducer(acc, x)
    }
    return acc
}

export function foldl1<T>(reducer: (acc: T, val: T) => T, xs: Mappable<T>): T {
    const [head, rest] = uncons(xs)
    // if first is undefined due to the length of the Iterable
    // the result will be an empty array
    return foldl(reducer, head as T, rest)
}
