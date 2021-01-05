export function chunk<T>(arr: T[], size?: number): T[][]
export function chunk<T>(arr: readonly T[], size?: number): (readonly T[])[]
export function chunk<T>(arr: readonly T[], size = 1): (readonly T[])[] {
    size = Math.max(size, 1)
    const cache: T[][] = []
    const tmp = [...arr]
    while (tmp.length > 0) {
        cache.push(tmp.splice(0, size))
    }
    return cache
}
