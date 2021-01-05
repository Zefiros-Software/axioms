export function attempt<T>(fn: () => T, fallback: T): T {
    try {
        return fn()
    } catch (err: unknown) {
        return fallback
    }
}
