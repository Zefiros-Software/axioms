import { Mappable, toTraversable, Traversable } from "~/type/traversable"


export function* mapAccumL<S, B, T>(f: (a: S, b: B) => [S, T], init: S, xs: Mappable<B>): Generator<T, S> {

    let state = init
    let value: T
    for (const x of toTraversable(xs)) {
        [state, value] = f(state, x)
        yield value
    }
    return state
}