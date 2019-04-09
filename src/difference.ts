export function difference<T>(array: T[], other: T[]) {
    return array.filter(x => !other.includes(x))
}
