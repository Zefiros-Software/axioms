export function curry<T extends readonly unknown[], U extends readonly any[], R>(
    f: (...args: [...T, ...U]) => R,
    ...headArgs: T
) {
    return (...tailArgs: U) => f(...headArgs, ...tailArgs)
}
