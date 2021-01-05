import { isplitLast } from '~/iterator/split'

export function init<T>(xs: Iterable<T>): T[] {
    const [init] = isplitLast(xs)
    return init
}
