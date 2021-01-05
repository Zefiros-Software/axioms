export function* iconcat<T, U>(xs1: Iterable<T>, xs2: Iterable<U>) {
    yield* xs1
    yield* xs2
}

export function concat<T extends readonly unknown[], U extends readonly unknown[]>(xs1: T, xs2: U): [...T, ...U] {
    return [...xs1, ...xs2]
}
