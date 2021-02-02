import type { Either, Right } from '~/type/either'
import type { InfiniteGenerator } from '~/type/generator'
import type { Traverser } from '~/type/traversable'

export function inext<T>(g: InfiniteGenerator<T>): Right<IteratorResult<T>>
export function inext<T, R>(g: Generator<T, R> | Iterator<T, R>): Either<IteratorResult<R>, IteratorResult<T>>
export function inext<T, R>(g: Generator<T, R> | Iterator<T, R>): Either<IteratorResult<R>, IteratorResult<T>> {
    const it = g.next()
    return it.done === true ? { left: it } : { right: it }
}

// export function next<T>(g: InfiniteGenerator<T>): Right<T>
export function next<T, R = unknown>(g: Generator<T, R> | Traverser<T, R>): Either<R, T>
export function next<T, R = unknown>(g: Generator<T, R> | Traverser<T, R>): Either<R, T> {
    const it = g.next()
    return it.done === true ? { left: it.value } : { right: it.value }
}
