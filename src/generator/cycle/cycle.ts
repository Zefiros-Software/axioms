import type { InfiniteGenerator } from '~/type/generator'

export function* cycle<T>(xs: Iterable<T>): InfiniteGenerator<T> {
    while (true) {
        for (const x of xs) {
            yield x
        }
    }
}
