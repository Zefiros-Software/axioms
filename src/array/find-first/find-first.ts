export function findFirst<T>(arr: Iterable<T>, by: (item: T) => boolean): T | undefined {
    for (const item of arr) {
        if (by(item)) {
            return item
        }
    }
    return undefined
}
