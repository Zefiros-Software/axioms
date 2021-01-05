export function isUndefined<O>(a: Readonly<O> | undefined): a is undefined {
    return typeof a === 'undefined'
}
