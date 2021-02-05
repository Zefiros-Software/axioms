import { disjointSet } from '../disjoint-set/disjoint-set'

import { iqueue } from '~/algorithm/queue'
import { istack } from '~/algorithm/stack'
import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/maybe'
import type { Traversable } from '~/type/traversable'
import { imap } from '~/iterator/map'
import type { Obj } from '~/type/obj'

export interface GraphNode<T> {
    name: string
    value: Maybe<T>
}

export interface GraphEdge<T, E> {
    value: E
    from: GraphNode<T>
    to: GraphNode<T>
}

export type GraphNodeName = string | number

export interface DiscoveryMarker<T> {
    add(value: GraphNode<T>): this
    has(value: GraphNode<T>): boolean
}

export type GraphMode = 'directed' | 'undirected'

export class Graph<T extends Obj<T>, E = never> {
    private readonly _nodes: Record<GraphNodeName, GraphNode<T>> = {} as Record<GraphNodeName, GraphNode<T>>
    private readonly _fromToAdjacency: Record<GraphNodeName, Record<GraphNodeName, GraphEdge<T, E>>> = {} as Record<
        GraphNodeName,
        Record<GraphNodeName, GraphEdge<T, E>>
    >
    private readonly _edges: WeakMap<GraphNode<T>, WeakSet<GraphEdge<T, E>>> = new WeakMap()

    public addNode(name: GraphNodeName, value: Maybe<T> = Nothing): GraphNode<T> {
        const node = {
            name,
            value,
        } as GraphNode<T>
        if (!(name in this._nodes)) {
            this._nodes[name] = node
            this._fromToAdjacency[name] = {} as Record<GraphNodeName, GraphEdge<T, E>>
            this._edges.set(node, new WeakSet<GraphEdge<T, E>>())
        }
        return this._nodes[name]
    }

    public setEdge(a: GraphNodeName, b: GraphNodeName, ...value: [E] extends [never] ? [undefined?] : [E]): void
    public setEdge(a: GraphNodeName, b: GraphNodeName, value?: E): void {
        this._fromToAdjacency[a][b] = { value: value as E, from: this._nodes[a], to: this._nodes[b] }
    }

    public nodes(): Traversable<GraphNode<T>> {
        return Object.values(this._nodes)
    }

    public edges(): GraphEdge<T, E>[] {
        return Object.values(this._fromToAdjacency)
            .map((a) => Object.values(a))
            .flat()
    }

    public *dfs<T>(node: GraphNode<T>, visited: DiscoveryMarker<T> = new WeakSet()): Traversable<GraphNode<T>, void> {
        const queue = iqueue([node])
        for (const node of queue) {
            if (!visited.has(node)) {
                yield node
                queue.enqueue(imap((n) => this._nodes[n], Object.keys(this._fromToAdjacency[node.name])))
                visited.add(node)
            } else {
                // cyclic
            }
        }
    }

    public *bfs<T>(node: GraphNode<T>, visited: DiscoveryMarker<T> = new WeakSet()): Traversable<GraphNode<T>, void> {
        const stack = istack([node])
        for (const node of stack) {
            if (!visited.has(node)) {
                yield node
                stack.push(imap((n) => this._nodes[n], Object.keys(this._fromToAdjacency[node.name])))
                visited.add(node)
            } else {
                // cyclic
            }
        }
    }
}

export type WeightedEdge = { weight: number }
export type WeightSortFunction<T, E> = (a: GraphEdge<T, E>, b: GraphEdge<T, E>) => number

function defaultWeightSort<T>(a: GraphEdge<T, WeightedEdge>, z: GraphEdge<T, WeightedEdge>) {
    return a.value.weight - z.value.weight
}

export function* kruskal<T, E = WeightedEdge>(
    G: Graph<T, E>,
    sortBy: WeightSortFunction<T, E> = (defaultWeightSort as unknown) as WeightSortFunction<T, E>
): Traversable<GraphEdge<T, E>, void> {
    const set = disjointSet()
    for (const v of G.nodes()) {
        set.partition(v)
    }
    for (const [f, t, e] of G.edges()
        .sort(sortBy)
        .map((e) => [e.from, e.to, e] as const)) {
        if (set.find(f) !== set.find(t)) {
            yield e
            set.union(f, t)
        }
    }
}

export function* topologicalSort<T, E>(G: Graph<T, E>) {
    const visited: WeakSet<GraphNode<T>> = new WeakSet()
    for (const node of G.nodes()) {
        if (!visited.has(node)) {
            yield* G.dfs(node, visited)
        }
    }
}
