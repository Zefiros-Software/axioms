import { istack } from '~/algorithm/stack'
import { iqueue } from '~/algorithm/queue'
import type { Mappable, Traversable } from '~/type/traversable'

export interface Tree<T> {
    value: T
    children: Mappable<Tree<T>>
}

export function tree<T>(x: T, children?: Mappable<Tree<T>>): Tree<T> {
    return { value: x, children: children ?? [] }
}

export function* dfsPreOrder<T>(node: Tree<T>): Traversable<T, void> {
    const stack = istack([node])
    for (const node of stack) {
        yield node.value
        stack.push(node.children)
    }
}

export function* dfsPostOrder<T>(node: Tree<T>): Traversable<T, void> {
    const stack = istack([node])
    const ordered = []
    for (const node of stack) {
        ordered.push(node.value)
        stack.push(node.children)
    }

    for (const value of ordered.reverse()) {
        yield value
    }
}

export function* bfs<T>(node: Tree<T>): Traversable<T, void> {
    const queue = iqueue([node])
    for (const node of queue) {
        yield node.value
        queue.enqueue(node.children)
    }
}
