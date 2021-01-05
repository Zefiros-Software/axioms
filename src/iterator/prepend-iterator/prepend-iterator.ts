export function* iprependIterator<T>(first: IteratorResult<T>, second: Iterator<T>): Iterator<T> {
    if (first.done !== true) {
        yield first.value
    }
    yield* {
        [Symbol.iterator]() {
            return second
        },
    }
}

function $() { }
