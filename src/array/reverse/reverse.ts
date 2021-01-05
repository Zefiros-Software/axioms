export function* ireverse<T>(arr: readonly T[]): Generator<T, void> {
    for (let i = arr.length - 1; i >= 0; --i) {
        yield arr[i]
    }
}

export function reverse<T>(arr: T[]): T[]
export function reverse<T>(arr: readonly T[]): readonly T[]
export function reverse<T>(arr: Iterable<T>): readonly T[] {
    return [...arr].reverse()
}
