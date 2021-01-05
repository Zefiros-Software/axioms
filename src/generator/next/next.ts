export function next<T>(g: Generator<T>): T {
    return g.next().value as T
}
