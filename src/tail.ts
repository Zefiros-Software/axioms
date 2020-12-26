export function tail<T>(array: ReadonlyArray<T> | undefined | null): T | undefined {
    array = array || []
    return array[array.length - 1]
}
