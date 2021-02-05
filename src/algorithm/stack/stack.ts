import { ireverse } from '~/array/reverse'
import { next } from '~/generator/next'
import { isLeft } from '~/guard/is-left'
import { isRight } from '~/guard/is-right'
import type { Mappable, Traverser } from '~/type/traversable'
import { toTraverser, toTraversable } from '~/type/traversable'

export interface StackGenerator<T> extends Generator<T, void> {
    push(xs: Mappable<T>): void
}

export function istack<T>(xs: Mappable<T>): StackGenerator<T> {
    const pending: Traverser<T>[] = [toTraverser(xs)]
    const generator: StackGenerator<T> = (function* () {
        while (pending.length > 0) {
            let node = next(pending[pending.length - 1])
            while (isLeft(node) && pending.length > 0) {
                pending.pop()
                if (pending.length > 0) {
                    node = next(pending[pending.length - 1])
                }
            }
            if (isRight(node)) {
                yield node.right
            }
        }
    })() as StackGenerator<T>

    generator.push = (xs: Mappable<T>) => {
        pending.push(toTraverser(xs))
    }

    return generator
}
