import { isplitLast } from '~/iterator/split'
import { Maybe } from '~/type/maybe'

export function last<T>(xs: Iterable<T>): Maybe<T> {
    const [, last] = isplitLast(xs)
    return last
}
