import { entries } from '~/object/entries/entries'

export function mapValues<T, Mapper extends (v: T[keyof T], k: keyof T) => unknown>(
    obj: T,
    mapper: Mapper
): {
    [K in keyof T]: Mapper extends (v: T[keyof T], k: K) => infer O ? O : never
} {
    return Object.fromEntries(entries(obj).map(([k, v]) => [k, mapper(v, k)])) as {
        [K in keyof T]: Mapper extends (v: T[keyof T], k: K) => infer O ? O : never
    }
}
