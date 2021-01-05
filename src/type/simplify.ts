import type { Dict } from './dict'

export type Simplify<T> = T extends Dict
    ? { [k in keyof T]: Simplify<T[k]> }
    : T extends unknown[]
    ? { [k in keyof T]: Simplify<T[k]> }
    : T
