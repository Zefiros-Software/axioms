import { AssocMap } from '~/data/assoc/assoc'
import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/maybe'

export type DisjointPartition<T> = {
    value: T
    rank: number
    parent: DisjointPartition<T>
}

export function disjointSet<T>() {
    const partitions: AssocMap<T, DisjointPartition<T>> = new AssocMap()

    function partition(value: T): DisjointPartition<T> {
        const root = {
            value,
            rank: 0,
        } as DisjointPartition<T>
        root.parent = root
        partitions.set(value, root)
        return root
    }

    function find(value: T): Maybe<DisjointPartition<T>> {
        const node = partitions.get(value)
        return node !== undefined ? findByNode(node) : Nothing
    }

    function findByNode(node: DisjointPartition<T>) {
        if (node.parent !== node) {
            // path compression
            node.parent = findByNode(node.parent)
        }
        return node.parent
    }

    function union(a: T, b: T) {
        const ra = find(a)
        const rb = find(b)
        if (ra !== rb && ra !== Nothing && rb !== Nothing) {
            if (ra.rank < rb.rank) {
                ra.parent = rb
            } else {
                rb.parent = ra
                if (ra.rank === rb.rank) {
                    ra.rank += 1
                }
            }
        }
    }

    return {
        partition,
        find,
        union,
    }
}
