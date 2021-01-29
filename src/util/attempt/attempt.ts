export function attempt<T, F>(fn: () => T, fallback: F): T | F {
    try {
        return fn()
    } catch (err: unknown) {
        return fallback
    }
}
