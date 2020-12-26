import { compact } from '~/compact'
import { isDefined } from '~/is-defined'

export function zip<T, U>(arrays: ReadonlyArray<[T, U]>): Array<[T, U]>
export function zip<T, U, V>(arrays: ReadonlyArray<[T, U, V]>): Array<[T, U, V]>
export function zip<T, U, V, W>(arrays: ReadonlyArray<[T, U, V, W]>): Array<[T, U, V, W]>
export function zip<T, U, V, W, X>(arrays: ReadonlyArray<[T, U, V, W, X]>): Array<[T, U, V, W, X]>
export function zip<T, U>(a: ReadonlyArray<T>, b: ReadonlyArray<U>): Array<[T, U]>
export function zip<T, U, V>(a: ReadonlyArray<T>, b: ReadonlyArray<U>, c: ReadonlyArray<V>): Array<[T, U, V]>
export function zip<T, U, V, W>(
    a: ReadonlyArray<T>,
    b: ReadonlyArray<U>,
    c: ReadonlyArray<V>,
    d: ReadonlyArray<W>
): Array<[T, U, W]>
export function zip<T, U, V, W, X>(
    a: ReadonlyArray<T>,
    b: ReadonlyArray<U>,
    c: ReadonlyArray<V>,
    d: ReadonlyArray<W>,
    e: ReadonlyArray<X>
): Array<[T, U, V, W, X]>
export function zip<T, U, V, W, X>(
    a: ReadonlyArray<T> | [ReadonlyArray<T>, ReadonlyArray<U>, ReadonlyArray<V>, ReadonlyArray<W>, ReadonlyArray<X>],
    b?: ReadonlyArray<U>,
    c?: ReadonlyArray<V>,
    d?: ReadonlyArray<W>,
    e?: ReadonlyArray<X>
): Array<[T, U] | [T, U, V] | [T, U, V, W] | [T, U, V, W, X]> {
    const arrays = !isDefined(b)
        ? (a as [ReadonlyArray<T>, ReadonlyArray<U>, ReadonlyArray<V>, ReadonlyArray<W>, ReadonlyArray<X>])
        : compact(([a as ReadonlyArray<T>, b, c, d, e] as unknown) as [
              ReadonlyArray<T>,
              ReadonlyArray<U>,
              ReadonlyArray<V>,
              ReadonlyArray<W>,
              ReadonlyArray<X>
          ])
    const length = Math.min(...arrays.map(arr => arr.length))
    return Array.from(
        { length },
        (_, index) => arrays.map(array => array[index]) as [T, U] | [T, U, V] | [T, U, V, W] | [T, U, V, W, X]
    )
}
