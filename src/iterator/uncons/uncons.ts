import { Maybe } from "~/type/maybe"
import { Nothing } from "~/type/nothing"
import { Mappable, toTraverser, Traverser } from "~/type/traversable"

export function uncons<T>(xs: Mappable<T>): [Maybe<T>, Traverser<T>] {
    const iterator = toTraverser(xs)
    const head = iterator.next()

    return [head.done === true ? Nothing : head.value, iterator]
}