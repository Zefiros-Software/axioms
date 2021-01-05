export function isArray<I = unknown>(arr: ReadonlyArray<I> | unknown): arr is I[] {
    return Array.isArray(arr)
}
