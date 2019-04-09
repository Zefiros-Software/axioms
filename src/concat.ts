export function concat<T>(array: T[], ...items: ConcatArray<T>[])  {
    return array.concat(...items)
}