import { flatten } from '~/flatten'

export function union<T>(...arrays: Array<ReadonlyArray<T>>) {
    return [...new Set(flatten(arrays))]
}
