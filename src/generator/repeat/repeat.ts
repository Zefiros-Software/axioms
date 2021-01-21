import type { InfiniteGenerator } from '~/type/generator'

export function* repeat<T>(val: T): InfiniteGenerator<T> {
    while (true) {
        yield val
    }
}
