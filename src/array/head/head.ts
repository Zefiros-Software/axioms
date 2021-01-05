import { isplitHead } from '~/iterator/split'

export function head<T>(xs: Iterable<T>): T | undefined {
    const [head] = isplitHead(xs)
    return head
}
