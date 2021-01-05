export function* counter(start = 0): Generator<number> {
    let i = start
    while (true) {
        yield i++
    }
}
