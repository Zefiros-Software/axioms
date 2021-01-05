export function* repeat<T>(val: T) {
    while (true) {
        yield val
    }
}
