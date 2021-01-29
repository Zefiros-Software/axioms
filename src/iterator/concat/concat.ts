import type { Traversable } from '~/type/traversable'

export function iconcat<T, U>(xs1: Traversable<T>, xs2: Traversable<U>): Traversable<T | U, void>
export function iconcat<T, U, V>(xs1: Traversable<T>, xs2: Traversable<U>, xs3: Traversable<V>): Traversable<T | U | V, void>
export function iconcat<T>(...xs: Traversable<T>[]): Traversable<T, void>
export function* iconcat<T>(...xs: Traversable<T>[]): Traversable<T, void> {
    for (const x of xs) {
        yield* x
    }
}

export function concat<T extends readonly unknown[], U extends readonly unknown[]>(xs1: T, xs2: U): [...T, ...U]
export function concat<T extends readonly unknown[], U extends readonly unknown[], V extends readonly unknown[]>(
    xs1: T,
    xs2: U,
    xs3: V
): [...T, ...U, ...V]
export function concat<T>(...xs: T[][]): T[]
export function concat<T>(...xs: T[][]): T[] {
    return ([] as T[]).concat(...xs)
}
