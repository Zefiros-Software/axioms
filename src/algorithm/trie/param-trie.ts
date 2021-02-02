import { isRight } from '~/guard/is-right'
import type { Either } from '~/type/either'
import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/maybe'

export interface ParamTrie<T> {
    value: Maybe<T>
    parameter: Maybe<string>
    children: Record<keyof any | Nothing, ParamTrie<T>>
}

function find<T>(parts: readonly string[], node: ParamTrie<T>): Maybe<[T, [string, string][]]> {
    let child: ParamTrie<T> | undefined = node
    const parameters: [string, string][] = []
    for (const head of parts) {
        child = child.children[head] ?? child.children[(Nothing as unknown) as string]
        if (child === undefined) {
            return Nothing
        }
        if (child.parameter !== Nothing) {
            parameters.push([child.parameter, head])
        }
    }
    return child.value !== Nothing ? [child.value, parameters] : Nothing
}

function insert<T>(prefix: Either<string, string>[], value: T, node: ParamTrie<T>): boolean {
    let child: ParamTrie<T> | undefined = node
    for (const head of prefix) {
        const [index, parameter] = isRight(head) ? ([head.right, Nothing] as const) : ([Nothing, head.left] as const)

        child = node.children[index as string]
        if (child === undefined) {
            child = { value: Nothing, children: {}, parameter }
            node.children[index as string] = child
        }

        node = child
    }
    if (node.value === Nothing) {
        node.value = value
        return true
    }
    return false
}

export function parameterTrie<T>() {
    const root: ParamTrie<T> = { value: Nothing, children: {}, parameter: Nothing }

    return {
        root,
        insert: function (prefix: Either<string, string>[], value: T) {
            return insert(prefix, value, root)
        },
        find: function (parts: readonly string[]) {
            return find(parts, root)
        },
    }
}
