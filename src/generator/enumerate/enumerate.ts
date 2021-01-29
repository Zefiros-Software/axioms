import { counter } from '~/generator/counter'
import { izip } from '~/array/zip'
import type { Traversable, Traverser } from '~/type/traversable'

export function* enumerate<T>(xs: Traversable<T>): Traversable<[number, T], void> {
    yield* izip(counter(), xs)
}
