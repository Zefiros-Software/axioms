import { reverse } from '~/array/reverse'
import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/nothing'
import type { Traversable } from '~/type/traversable'

export function findLast<T>(arr: Traversable<T>, by: (item: T) => boolean): Maybe<T> {
    for (const item of reverse(arr)) {
        if (by(item)) {
            return item
        }
    }
    return Nothing
}
