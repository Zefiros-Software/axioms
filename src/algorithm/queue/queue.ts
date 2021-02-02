import type { Mappable } from '~/type/traversable'
import { toTraversable } from '~/type/traversable'

export interface QueueGenerator<T> extends Generator<T, void> {
    enqueue(xs: Mappable<T>): void
}

export function iqueue<T>(xs: Mappable<T>): QueueGenerator<T> {
    const states: Mappable<T>[] = [xs]
    const generator: QueueGenerator<T> = (function* () {
        while (states.length > 0) {
            const next = states.shift()!
            yield* toTraversable(next)
        }
    })() as QueueGenerator<T>

    generator.enqueue = (xs: Mappable<T>) => {
        states.push(xs)
    }
    return generator
}
