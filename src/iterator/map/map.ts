import { next } from "~/generator/next"
import { isRight } from "~/guard/is-right"
import { Either } from "~/type/either"
import { Mappable, toTraversable, toTraverser } from "~/type/traversable"

export function* gmap<T, R>(xs: Mappable<T, R>): Generator<Either<R, T>, void> {
    const iterator = toTraverser(xs)
    let val = next(iterator)
    for (; isRight(val); val = next(iterator)) {
        yield val
    }
    yield val
}

export function* fmap<T, R>(f: (x: T) => R, xs: Mappable<T, R>): Generator<R, void> {
    for (const x of toTraversable(xs)) {
        yield f(x)
    }
}
