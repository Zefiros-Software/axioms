export function* cycle<T>(xs: Iterable<T>): Generator<T> {
    while (true) {
        for (const x of xs) {
            yield x
        }
    }
}
