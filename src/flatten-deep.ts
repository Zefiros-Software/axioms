export function flattenDeep<T>(array: ReadonlyArray<T>): any[] {
    return [...array].flat(Infinity)
}
