import { reverse } from '~/array/reverse'

export function findLast<T>(arr: Iterable<T>, by: (item: T) => boolean): T | undefined {
    for (const item of reverse(arr)) {
        if (by(item)) {
            return item
        }
    }
    return undefined
}
