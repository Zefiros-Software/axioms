export function chunk<T>(arr: T[], size: number = 1) {
    const cache: T[][] = []
    const tmp = [...arr]
    while (tmp.length) {
        cache.push(tmp.splice(0, size))
    }
    return cache
}
