export function isArray<T>(arg: any): arg is T[] {
    return Array.isArray(arg)
}
