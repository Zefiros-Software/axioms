import { isGenerator } from '~/guard/is-generator'
import { isIterable } from '~/guard/is-iterable'

export type Traverser<T, R = unknown> = Iterator<T, R>
export type Traversable<T, R = unknown> = {
    [Symbol.iterator](): Iterator<T, R>
}
export type Mappable<T, R = unknown> = Traversable<T, R> | Traverser<T, R> | (() => Generator<T, R>)

export function toTraverser<T, R>(x: Mappable<T, R>): Traverser<T, R> {
    return isIterable(x) ? x[Symbol.iterator]() : isGenerator(x) ? x() : x
}
export function toTraversable<T, R>(x: Mappable<T, R>): Traversable<T, R> {
    return isIterable(x) ? x : isGenerator(x) ? x() : { [Symbol.iterator]: () => x }
}
