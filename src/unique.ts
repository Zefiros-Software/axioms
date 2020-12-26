export function unique<T>(array: Iterable<T>): T[] {
    return [...new Set(array)]
}
