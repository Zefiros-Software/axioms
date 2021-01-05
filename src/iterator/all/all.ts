export function all<T>(predicate: (x: T) => boolean, xs: Iterable<T>): boolean {
    for (const x of xs) {
        if (!predicate(x)) {
            return false
        }
    }
    return true
}
