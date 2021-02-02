import { istack } from '~/algorithm/stack'
import type { Traversable } from '~/type/traversable'

export interface BinaryTree<T> {
    value: T
    left?: BinaryTree<T>
    right?: BinaryTree<T>
}

export function* dfsNLR<T>(node: BinaryTree<T>): Traversable<T, void> {
    const stack = istack([node])
    for (const node of stack) {
        yield node.value
        if (node.left !== undefined) {
            stack.push([node.left])
        }
        if (node.right !== undefined) {
            stack.push([node.right])
        }
    }
}

export function* dfsLRN<T>(node: BinaryTree<T>): Traversable<T, void> {
    const stack = istack([node])
    const ordered = []
    for (const node of stack) {
        ordered.push(node?.value)
        if (node.left !== undefined) {
            stack.push([node.left])
        }
        if (node.right !== undefined) {
            stack.push([node.right])
        }
    }

    for (const value of ordered.reverse()) {
        yield value
    }
}
