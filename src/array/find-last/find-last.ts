export function findLast<T>(arr: ReadonlyArray<T>, by: (item: T) => boolean): T | undefined {
    let found: T | undefined
    for (const item of arr) {
        if (by(item)) {
            found = item
        }
    }
    return found
}
