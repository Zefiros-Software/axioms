import { isRight } from "~/guard/is-right"
import { Either } from "~/type/either"
import { Traversable, Traverser } from "~/type/traversable"

export function* iprependIterator<T>(first: Either<unknown, IteratorResult<T>>, second: Traverser<T>) {
    if (isRight(first)) {
        if (first.right.done !== true) {
            yield first.right.value
        }
    }
    yield* {
        [Symbol.iterator]() {
            return second
        },
    }
}