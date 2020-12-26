export function lastIndexOf<T>(array: ReadonlyArray<T>, searchElement: T, fromIndex: number = array.length - 1): number {
    return array.lastIndexOf(searchElement, fromIndex)
}
