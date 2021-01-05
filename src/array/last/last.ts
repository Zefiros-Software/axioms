import { isplitLast } from '~/iterator/split'

export function last<T>(xs: Iterable<T>): T | undefined {
    const [, last] = isplitLast(xs)
    return last
}
