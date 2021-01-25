import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/nothing'
import type { Traversable } from '~/type/traversable'

export function findFirst<T>(arr: Traversable<T>, by: (item: T) => boolean): Maybe<T> {
    for (const item of arr) {
        if (by(item)) {
            return item
        }
    }
    return Nothing
}
