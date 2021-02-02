export function isArray<I>(arr: readonly I[] | unknown): arr is I[] {
    return Array.isArray(arr)
}
