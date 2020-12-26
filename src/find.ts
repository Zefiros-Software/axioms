export function find<T>(array: ReadonlyArray<T>, predicate: ArrayIterator<T>): T | undefined {
    return array.find(predicate)
}
