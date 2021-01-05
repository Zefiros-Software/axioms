import { repeat } from '~/generator/repeat'
import { itake } from '~/iterator/take'

export function* replicate<T>(n: number, val: T) {
    yield* itake(n, repeat(val))
}
