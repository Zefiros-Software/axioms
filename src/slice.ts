export function slice<T>(array: ReadonlyArray<T>, start: number = 0, end: number = array.length): T[] {
    return array.slice(start, end)
}
