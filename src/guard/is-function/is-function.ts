export function isFunction<T extends readonly unknown[], R>(f: ((...args: [...T]) => R) | unknown): f is (...args: [...T]) => R {
    return typeof f === 'function'
}
