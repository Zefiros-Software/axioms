export function isError(obj: Error | unknown): obj is Error {
    return obj !== undefined && (obj as Error).message !== undefined && (obj as Error).stack !== undefined
}
