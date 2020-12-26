import { isDefined } from '~/is-defined'

export function concat<T>(...items: ReadonlyArray<ConcatArray<T> | null | undefined>): T[] {
    return [].concat(...items.filter(isDefined))
}
