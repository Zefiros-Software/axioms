export function flatten<T>(array: T[]): T[] {
    return array.reduce((a, b) => a.concat(b), [])
}
