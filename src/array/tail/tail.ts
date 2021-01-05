import { isplitHead } from '~/iterator/split'

export function itail<T>(xs: Iterable<T>): Iterable<T> {
    const [, rest] = isplitHead(xs)
    return rest
}

export function tail<T extends unknown[]>(xs: readonly [unknown, ...T]): [...T] {
    const [, ...rest] = xs
    return rest
}
