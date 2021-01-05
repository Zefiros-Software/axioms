import type { Dict } from '~/type/dict'

export type DeepPartial<T> = T extends Dict
    ? { [k in keyof T]?: DeepPartial<T[k]> }
    : T extends Array<infer I>
    ? Array<DeepPartial<I>>
    : T | undefined
