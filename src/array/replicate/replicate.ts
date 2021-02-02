import { isFunction } from '~/guard/is-function'
import { repeat } from '~/generator/repeat'
import { itake } from '~/iterator/take'

export function* ireplicate<T>(n: number, val: T | (() => T)) {
    yield* itake(n, repeat(val))
}

export function replicate<T>(n: number, x: T | (() => T)): T[] {
    if (isFunction(x)) {
        return Array.from(Array(n), x)
    } else {
        return Array<T>(n).fill(x)
    }
}
