import { foldl1 } from '~/iterator/fold'
import type { Mappable } from '~/type/traversable'

export function sum(xs: Mappable<number>) {
    return foldl1((a, b) => a + b, xs)
}
