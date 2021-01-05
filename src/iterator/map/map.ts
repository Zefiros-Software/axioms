export type Functor<T> = Iterable<T>
export function* fmap<T, R>(f: (x: T) => R, xs: Functor<T>): Generator<R> {
    for (const x of xs) {
        yield f(x)
    }
}
