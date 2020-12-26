export function last<T>(array: ReadonlyArray<T> | undefined | null, count: number = 1): T[] {
    return (array || []).slice(-count)
}
