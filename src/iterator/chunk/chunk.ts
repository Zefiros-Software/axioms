import { isplitAt } from '~/iterator/split/split'
import type { RecurrentGenerator } from '~/util/trampoline/trampoline'
import { itrampoline } from '~/util/trampoline/trampoline'

function _ichunk<T>(size: number, xs: Iterable<T>): RecurrentGenerator<T[]> {
    const [chunk, second] = isplitAt(size, xs)
    return [chunk, chunk.length > 0 ? () => _ichunk(size, second) : undefined] as const
}

export function* ichunk<T>(size: number, xs: Iterable<T>): Generator<T[]> {
    yield* itrampoline(_ichunk)(size, xs)
}

// export function* ichunk<T>(size: number, xs: Iterable<T>): Generator<T[]> {
//     const [chunk, second] = isplitAt(size, xs)
//     yield chunk
//     if (chunk.length > 0) {
//         yield* ichunk(size, second)
//     }
// }

export function chunk<T>(size: number, xs: T[]): T[][]
export function chunk<T>(size: number, xs: readonly T[]): (readonly T[])[]
export function chunk<T>(size: number, xs: Iterable<T>): (readonly T[])[] {
    size = Math.max(size, 1)
    const cache: T[][] = []
    const tmp = [...xs]
    while (tmp.length > 0) {
        cache.push(tmp.splice(0, size))
    }
    return cache
}
