export function findIndex<T>(array: ReadonlyArray<T>, predicate: ArrayIterator<T>): number {
    return array.findIndex(predicate)
}
