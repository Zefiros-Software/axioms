import { counter } from '~/generator/counter'
import { izip } from '~/array/zip'

export function* enumerate<T>(xs: Iterable<T>): Generator<[number, T]> {
    yield* izip(counter(), [...xs])
}
