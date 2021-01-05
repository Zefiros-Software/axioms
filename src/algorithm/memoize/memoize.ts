interface Memoized<T> {
    (): T
    clear: () => void
}

export function memoize<T>(getter: () => T): Memoized<T> {
    let value: T | undefined
    const memoized: Memoized<T> = () => {
        value ??= getter()
        return value
    }
    memoized.clear = () => {
        value = undefined
    }
    return memoized
}
