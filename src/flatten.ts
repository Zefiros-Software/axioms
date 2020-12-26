export function flatten<T>(array: ReadonlyArray<T>, depth?: number): any[] {
    return [...array].flat(depth)
}
