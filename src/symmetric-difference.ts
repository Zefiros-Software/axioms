export function symmetricDifference<T>(...arrays: Array<ReadonlyArray<T>>) {
    const all = arrays.reduce((array, value) => array.concat(value), [])
    const repeated = all.filter((value, index, items) => items.indexOf(value) !== index)
    const diff = all.filter(item => repeated.indexOf(item) < 0)
    return diff
}
