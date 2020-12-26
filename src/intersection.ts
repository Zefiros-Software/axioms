export function intersection<T>(...arrays: Array<ReadonlyArray<T>>): T[] {
    return arrays.reduce((a, b) => a.filter(c => b.includes(c))) as T[]
}
