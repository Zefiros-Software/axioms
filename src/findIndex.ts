export function findIndex<T>(
    array: T[],
    predicate: (this: void, value: T, index: number, obj: T[]) => value is T
): number {
    return array.findIndex(predicate)
}
