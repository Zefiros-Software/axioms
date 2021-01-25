import { uncons } from '~/iterator/uncons'
import type { Maybe } from '~/type/maybe'
import type { Mappable } from '~/type/traversable'

export function head<T>(xs: Mappable<T>): Maybe<T> {
    const [head] = uncons(xs)
    return head
}
