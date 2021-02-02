import { isFunction } from '~/guard/is-function'
import type { InfiniteGenerator } from '~/type/generator'

export function* repeat<T>(x: T | (() => T)): InfiniteGenerator<T> {
    if (isFunction(x)) {
        while (true) {
            yield x()
        }
    } else {
        while (true) {
            yield x
        }
    }
}
