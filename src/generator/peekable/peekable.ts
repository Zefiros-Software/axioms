import { Either } from "~/type/either"
import { Mappable, toTraverser, Traverser } from "~/type/traversable"

export interface PeekableGenerator<T, R> extends Generator<T, R> {
    peek(): Either<R, T>
}

export function peekable<T, R>(xs: Mappable<T, R>): PeekableGenerator<T, R> {
    const iterator = toTraverser(xs)
    let state = iterator.next()

    const generator: PeekableGenerator<T, R> = (function* () {
        while (state.done !== true) {
            const current = state.value
            state = iterator.next()
            yield current
        }
        return state.value
    })() as PeekableGenerator<T, R>

    generator.peek = () => state.done ? { left: state.value } : { right: state.value }
    return generator
}