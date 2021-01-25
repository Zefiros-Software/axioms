import type { Obj } from '~/type/obj'
import type { Traverser } from '~/type/traversable'

export function isIterator<T, R, O extends Obj<O>>(x: O | Traverser<T, R>): x is Traverser<T, R> {
    return typeof (x as Traverser<T, R>).next === 'function'
}
