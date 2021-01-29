export function isGenerator<T, R>(fn: unknown | (() => Generator<T, R>)): fn is () => Generator<T, R> {
    return typeof fn === 'function' && fn.constructor !== null && fn.constructor.name === 'GeneratorFunction'
}
