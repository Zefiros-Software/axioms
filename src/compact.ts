
export function compact<T>(array: T[]) {
    return array.filter(x => !!x)
}