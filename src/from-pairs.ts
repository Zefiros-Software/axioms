export function fromPairs<K extends keyof any, T, U>(array: ReadonlyArray<[K, T]>): Record<K, T> {
    const inital: Record<K, T> = {} as any
    return array.reduce((accumulator: Record<K, T>, value) => {
        accumulator[value[0]] = value[1]
        return accumulator
    }, inital)
}
