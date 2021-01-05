import { isDefined } from '~/guard/is-defined'
import { ifilter } from '~/iterator/filter/filter'

export function ifilterUndefined<T>(xs: Iterable<T>) {
    return ifilter(isDefined, xs)
}

export function filterUndefined<T>(xs: Iterable<T>): T[] {
    return [...ifilterUndefined(xs)]
}
