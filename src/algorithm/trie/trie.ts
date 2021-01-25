import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/nothing'

export interface Trie<T> {
    value: Maybe<T>
    children: Record<keyof any | Nothing, Trie<T>>
}

function find<T>(parts: readonly string[], node: Trie<T>): Maybe<[T, [string, string][]]> {
    let child: Trie<T> | undefined = node
    const parameters: [string, string][] = []
    for (const head of parts) {
        child = child.children[head]
        if (child === undefined) {
            return Nothing
        }
    }
    return child.value !== Nothing ? [child.value, parameters] : Nothing
}

function insert<T>(prefix: string[], value: T, node: Trie<T>): boolean {
    let child: Trie<T> | undefined = node
    for (const head of prefix) {
        child = node.children[head]
        if (child === undefined) {
            child = { value: Nothing, children: {} }
            node.children[head] = child
        }

        node = child
    }
    if (node.value === Nothing) {
        node.value = value
        return true
    }
    return false
}

export function trie<T>() {
    const root: Trie<T> = { value: Nothing, children: {} }

    return {
        root,
        insert: function (prefix: string[], value: T) {
            return insert(prefix, value, root)
        },
        find: function (parts: readonly string[]) {
            return find(parts, root)
        },
    }
}
