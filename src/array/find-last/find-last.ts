import { reverse } from '~/array/reverse'
import { Traversable } from '~/type/traversable'

export function findLast<T>(arr: Traversable<T>, by: (item: T) => boolean): T | undefined {
    for (const item of reverse(arr)) {
        if (by(item)) {
            return item
        }
    }
    return undefined
}
