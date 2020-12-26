export function head<T>(array: ReadonlyArray<T> | undefined | null): T | undefined {
    return (array || [])[0]
}
