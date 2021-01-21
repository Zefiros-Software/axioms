import { uncons } from '~/iterator/uncons'
import { Maybe } from '~/type/maybe'

export function head<T>(xs: Iterable<T>): Maybe<T> {
    const [head] = uncons(xs)
    return head
}
