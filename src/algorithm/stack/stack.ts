import { ireverse } from '~/array/reverse'
import { next } from '~/generator/next'
import { isRight } from '~/guard/is-right'
import type { Mappable, Traverser } from '~/type/traversable'

export interface StackGenerator<T> extends Generator<T, void> {
    push(xs: Mappable<T>): void
}

export function istack<T>(xs: Mappable<T>): StackGenerator<T> {
    const states: Traverser<T>[] = [ireverse(xs)]
    const generator: StackGenerator<T> = (function* () {
        while (states.length > 0) {
            const state = states[states.length - 1]
            const val = next(state)
            if (isRight(val)) {
                yield val.right
            } else {
                states.pop()
            }
        }
    })() as StackGenerator<T>

    generator.push = (xs: Mappable<T>) => {
        states.push(ireverse(xs))
    }
    return generator
}
