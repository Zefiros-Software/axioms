export function without<T>(array: ReadonlyArray<T>, ...values: ReadonlyArray<T>): T[] {
    return array.filter(value => !values.includes(value))
}
