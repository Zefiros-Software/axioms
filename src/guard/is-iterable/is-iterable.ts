import { Obj } from "~/type/obj"
import { Traversable } from "~/type/traversable"

export function isIterable<T, R, O extends Obj<O>>(x: O | Traversable<T, R>): x is Traversable<T, R> {
    return typeof x === 'string' || Symbol.iterator in x
} 