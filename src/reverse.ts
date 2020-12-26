export function reverse<T>(array: ReadonlyArray<T>): T[] {
    return [...array].reverse()
}
