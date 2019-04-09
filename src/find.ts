export function find<T>(
    array: T[],
    predicate: (this: void, value: T, index: number, obj: T[]) => value is T
): T | undefined {
    return array.find(predicate)
}
