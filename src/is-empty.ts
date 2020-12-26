export function isEmpty<O extends object, T, U>(obj: Readonly<O> | Set<T> | Map<T, U> | string | undefined | null): boolean {
    if (obj instanceof Set || obj instanceof Map) {
        return !obj.size
    }
    return [Object, Array].includes((obj || {}).constructor as ObjectConstructor) && !Object.entries(obj || {}).length
}
